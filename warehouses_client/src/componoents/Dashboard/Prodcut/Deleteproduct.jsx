import React from 'react';
import axios from 'axios';

function Deleteproduct({ productId, onDelete }) {
  const handleDelete = async () => {
    try {
      // Log the productId before making the request
      console.log('Deleting product with ID:', productId);

      const response = await axios.delete(`http://localhost:2024/deleteproducts/${productId}`);
      
      // Log the entire response for debugging
      console.log('Delete product response:', response);

      // Assuming the server sends a response with success and message
      console.log(response.data);
      
      // Trigger a refresh or update in your UI
      onDelete();
    } catch (error) {
      console.error('Error deleting product:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <button onClick={handleDelete}>
      Delete Product
    </button>
  );
}

export default Deleteproduct;
