import React, { useState } from 'react';

import './updateproduct.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const ProductUpdateForm = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
   id:'',
    title: '',
    price: '',
    stock: '',
    proddescr: '',
    image: null,
  });
const productId = formData.id;
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('stock', formData.stock);
    formDataToSend.append('proddescr', formData.proddescr);
    formDataToSend.append('image', formData.image);

    try {
      const response = await fetch(`http://localhost:2024/update/${productId}`, {
        method: 'PUT',
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);
          setTimeout(() => {
            navigate('/getproduct');
          }, 4000);

        
      } else {
        const errorData = await response.json();
        toast.error(errorData.message);
      }
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error('Internal Server Error');
    }
  };

  return (
   <div className='container-fiuld '>
       <h1 className='htwoupdata'>Update Product</h1>
    <div className='update p-5'>
      <form onSubmit={handleSubmit}>
      <label>
          id:
          <input type="text" name="id" value={formData.id} onChange={handleInputChange} />
        </label>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
        </label>
        <label>
          Price:
          <input type="text" name="price" value={formData.price} onChange={handleInputChange} />
        </label>
        <label>
          Stock:
          <input type="text" name="stock" value={formData.stock} onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <textarea name="proddescr" value={formData.proddescr} onChange={handleInputChange} />
        </label>
        <label>
          Image:
          <input type="file" onChange={handleImageChange} />
        </label>
        <button type="submit">Update Product</button>
      </form>
      <ToastContainer />
    </div>
    </div>
  );
};

export default ProductUpdateForm;
