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