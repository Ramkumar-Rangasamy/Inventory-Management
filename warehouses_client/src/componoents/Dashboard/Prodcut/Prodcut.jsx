import React, { useState } from 'react';
import axios from 'axios';
import './prodcut.css';

import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';


function Product() {
  const [imageFileName, setImageFileName] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    stock: '',
    proddescr: '',
    image: null,
    checked: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    setImageFileName(file ? file.name : null);
  };

  const handleImageReset = () => {
    setFormData({ ...formData, image: null });
    setImageFileName(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, price, stock, proddescr, image, checked } = formData;

    const formDataForServer = new FormData();
    formDataForServer.append('image', image);
    formDataForServer.append('title', title);
    formDataForServer.append('price', price);
    formDataForServer.append('stock', stock);
    formDataForServer.append('proddescr', proddescr);
    formDataForServer.append('checked', checked);

    try {
      const response = await axios.post('http://localhost:2024/products', formDataForServer, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

     

      if (response.status === 201) {

          toast.success('Product created successfully');
          setFormData({
            title: '',
            price: '',
            stock: '',
            proddescr: '',
            image: '',
            checked: false,
          });
          setImageFileName(null);
          
      } else {
       
        toast.error('Failed to create product');
        // Handle failure (display error message or other action)
      }
    } catch (error) {
      toast.error('Error creating product:', error);
      
      // Handle network error or other unexpected issues
      // You might want to set an error state here and display it to the user
    }
  };

  return (
    <>
     <div className="container-fluid">
     <h2 className="htwo Auth-form-container">Add Products</h2>
    <div className="auth-form-container p-5 Auth-form-container">
   
        <div className="row no-gutters Auth-form-pro p-5">
            <div className="col-lg-12">
                <form className="auth-form-pro col-lg-12" onSubmit={handleSubmit}>
                    <div className="auth-form-content">
                        <div className="form-group row mt-3">
                            <label className="col-sm-2 col-form-label" htmlFor="title">Title:</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder='Enter Title'
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group row mt-3">
                            <label className="col-sm-2 col-form-label" htmlFor="price">Price:</label>
                            <div className="col-sm-10">
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    placeholder='Enter Price'
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group row mt-3">
                            <label className="col-sm-2 col-form-label" htmlFor="stock">Stock:</label>
                            <div className="col-sm-10">
                                <input
                                    type="number"
                                    id="stock"
                                    name="stock"
                                    value={formData.stock}
                                    onChange={handleInputChange}
                                    placeholder='Enter Stock'
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group row mt-3">
                            <label className="col-sm-2 col-form-label " htmlFor="proddescr">Description:</label>
                            <div className="col-sm-10">
                                <textarea
                                    id="proddescr"
                                    name="proddescr"
                                    value={formData.proddescr}
                                    onChange={handleInputChange}
                                    placeholder='Enter product Description'
                                    className="form-control"
                                    required
                                ></textarea>
                            </div>
                        </div>

                        <div className="form-group row mt-3">
                            <label className="col-sm-2 col-form-label" htmlFor="image">Image:</label>
                            <div className="col-sm-10">
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    placeholder='Enter Picture'
                                    className="form-control-file"
                                    required
                                />
                                {imageFileName && <p>Selected Image: {imageFileName}</p>}
                            </div>
                        </div>

                        <div className="form-group form-check mt-3">
                            <input
                                type="checkbox"
                                name="checked"
                                className="form-check-input"
                                checked={formData.checked}
                                id="checked"
                                onChange={handleInputChange}
                            />
                            <label className="form-check-label" htmlFor="checked">Check out all information</label>
                        </div>

                        <div className="d-grid gap-2 mt-3 col-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <Link to='/getproduct'><button type="button" className="btn btn-success">Show all products</button></Link>
                            <ToastContainer />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

    </>
  );
}

export default Product;
