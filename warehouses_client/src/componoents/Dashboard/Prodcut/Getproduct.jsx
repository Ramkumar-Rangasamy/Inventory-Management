// GetProduct.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function GetProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:2024/getdata');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  // Modify handleDelete to accept productId
  const handleDelete = async (productId) => {
      // Use SweetAlert for confirmation
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });
    try {
      await axios.delete(`http://localhost:2024/deleteproducts/${productId}`);
      Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
      window.location.href = '/getproduct';;
      
      // Optionally, update state or perform other actions after successful deletion
    } catch (error) {
      console.error('Error deleting product:', error);
      Swal.fire('Error!', 'Failed to delete the product.', 'error');
    }
  };

  return (
    <div>
      <h2>Product List Once checking all products</h2>
      <div className='container-fuild' style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product.id} className='' style={{ border: '1px solid #ccc', borderRadius: '5px', margin: '10px', padding: '10px', width: '300px' }}>
              <p><strong>Product ID:</strong> {product.id}</p>
            <img
              src={`${product.imageUrl}`}
              alt={product.title}
              style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }}
            />
            <p className='pt-1'><strong>Title: {product.title}</strong></p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
            <p><strong>Description:</strong> {product.proddescr}</p>
            <Link key={product.id} to='/updateproduct'>
              <button type="button" className="btn btn-primary">
                Update
              </button>
            </Link>
            <Link key={`delete-${product.id}`}>
              {/* Pass product.id to handleDelete */}
              <button type="button" onClick={() => handleDelete(product.id)} className="btn btn-success">
                Delete
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetProduct;
