//package require
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const database = require("mysql");

//We create a middleware called upload using multer/
const multer = require("multer");
const path =require('path');
const fs =require('fs');


// import packages Using area in ( use keyword ) Middleware
const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(express.json());
app.use('/public/image', express.static('public/image'));



//database connection
let db = database.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "warehouse_application",
});

//database connected or  not in checking if connition
db.connect((er) => {
  if (er) {
    console.log(er);
  } else {
    console.log("Database is Connected! Successfully");
  }
});



//Login api post method using in here
app.post("/login", (req, res) => {
  const { UserId, Password } = req.body;

  const query = `SELECT * FROM admin_all WHERE email = ? AND password = ?`;
  db.query(query, [UserId, Password], (err, results) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      if (results.length > 0) {
        res.status(200).json({ 
            message: "Login successful"
         });

      } else {
        res.status(401).json({ 
            error: "Invalid credentials" 
        });
      }
    }
  });
});


//use of multer package
const storage = multer.diskStorage({
  destination :(req, file, cb)=>{
      cb(null, './public/image')
  },
  filename:(req, file, cb)=>{
      cb(null, file.fieldname+ '_' + Date.now() + path.extname( file.originalname ) )
  }
})

const maxSize = 5 * 1000 * 1000;
const upload = multer({
  storage : storage,
  limits : {
      fileSize : maxSize
  }
});

const uploadHandler = upload.single('image');

app.post('/products', (req, res) => {
  uploadHandler(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      if (err.code == 'LIMIT_FILE_SIZE') {
        res.status(400).json({ message: 'Maximum file size is 2mb.' });
      }
      return;
    }

    if (!req.file) {
      res.status(400).json({ message: 'No file!' });
    } else {
      const { title, price, stock, proddescr } = req.body;

      const sql =
        'INSERT INTO product_details (image, title, price, stock, proddescr, status, effectiveFrom, effectiveTo, createdBy, createdOn, modifiedBy, modifiedOn) VALUES (?, ?, ?, ?, ?, "active", CURRENT_DATE(), "9999-04-05", "admin", CURRENT_TIMESTAMP(), "admin", CURRENT_DATE())';

      db.query(sql, [req.file.filename, title, price, stock, proddescr], (err, result) => {
        if (err) {
          console.error('Error creating product:', err);
          res.status(500).send('Internal Server Error');
        } else {
          console.log('Product created successfully');
          res.status(201).json({
            success: 1,
            profile_url:  `http://localhost:2024/public/image/${req.file.filename}`
          });
        }
      });
    }
  });
});

// Route to get product data
app.get('/getdata', (req, res) => {
  // Assuming you have a database connection named db
  const sql = 'SELECT * FROM product_details';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error retrieving products:', err);
      res.status(500).send('Internal Server Error');
    } else {
      if (results.length === 0) {
        res.status(404).json({ message: 'No products found' });
      } else {
        const products = results.map(product => ({
          id: product.id,
          imageUrl: `http://localhost:2024/public/image/${product.image}`,
          title: product.title,
          price: product.price,
          stock: product.stock,
          proddescr: product.proddescr
          // Include other necessary fields
        }));

        res.status(200).json(products);
      }
    }
  });
});


//Route to update product data
app.put('/update/:productId', (req, res) => {
  const productId = req.params.productId;

  // Check if the product ID is provided
  if (!productId) {
    return res.status(400).json({ message: 'Product ID is required for updating.' });
  }

  // Use the same Multer configuration for handling file uploads
  const uploadHandler = upload.single('image');

  // Handle file upload first
  uploadHandler(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      if (err.code == 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ message: 'Maximum file size is 5mb.' });
      }
      return res.status(500).json({ message: 'File upload error' });
    }

    // Extract updated data from the request body
    const { title, price, stock, proddescr } = req.body;

    // Check if a new file is uploaded
    const newImage = req.file ? req.file.filename : null;

    // Update the product details in the database
    const updateSql =
      'UPDATE product_details SET image=?, title=?, price=?, stock=?, proddescr=?, modifiedBy="admin", modifiedOn=CURRENT_TIMESTAMP() WHERE id=?';

    const params = [newImage, title, price, stock, proddescr, productId];

    // Log the update SQL and parameters for debugging
    console.log('Update SQL:', updateSql);
    console.log('Update Params:', params);

    // Execute the update query
    db.query(updateSql, params, (err, result) => {
      if (err) {
        console.error('Error updating product:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
      } else {
        // Check if any rows were affected by the update
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: 'Product not found' });
        } else {
          return res.status(200).json({ success: 1, message: 'Product updated successfully' });
        }
      }
    });
  });
});


// DELETE endpoint for deleting a product
app.delete('/deleteproducts/:productId', (req, res) => {
  const productId = req.params.productId;

  // Get the current image filename from the database
  const getImageSql = 'SELECT image FROM product_details WHERE id=?';
  const getImageParams =productId;
  console.log('Product ID:', productId);
  db.query(getImageSql, getImageParams, (err, result) => {
    if (err) {
      console.error('Error retrieving image filename:', err);
      res.status(500).json({ message: 'Internal Server Error' });
      return;
    }

    // Check if result is defined and has at least one row
    if (!result || result.length === 0) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    console.log('SQL Query:', getImageSql);
    console.log('SQL Parameters:', getImageParams);
    const currentImage = result[0].image;

    // Delete the product and image from the database
    const deleteSql = 'DELETE FROM product_details WHERE id=?';
    const deleteParams = [productId];
    
    db.query(deleteSql, deleteParams, (err, deleteResult) => {
      if (err) {
        console.error('Error deleting product:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        // Delete the associated image file from the server
        if (currentImage) {
          const imagePath = `public/image/${currentImage}`;
          fs.unlink(imagePath, (err) => {
            if (err) {
              console.error('Error deleting image file:', err);
            }
          });
        }

        if (deleteResult.affectedRows === 0) {
          res.status(404).json({ message: 'Product not found' });
        } else {
          res.status(200).json({ success: 1, message: 'Product and image deleted successfully' });
        }
      }
    });
  });
});

   






// Server  listening server and  port number in last
app.listen(2024, () => {
  console.log(
    "Server is Running in 2024 http://localhost:2024 Successfully Running !"
  );
});
