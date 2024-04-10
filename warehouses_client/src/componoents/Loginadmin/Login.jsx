import React, { useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import './Login.css';

import picture from './asset/logistyka.png';

import { useNavigate } from "react-router-dom";
function Login() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    const handleLogin  = async (e)=>{
      e.preventDefault();
      try{
        const response =  await axios.post('http://localhost:2024/login',{
          UserId:user,
          Password:password
        });
        if(response.status===200){
          toast.success('Login successful!');
          setTimeout(() => {
            navigate('/products access');
          }, 3000);
         
        }else{
          toast.error('please verify the mail and password');
        }
      
      }catch(error){
        toast.error('Please try again.');
      }
    }

  return (
    <>
        <div className="breadcrumbs-admin">
            <nav>
                <div className="container ">
                    <ol>
                        <li><a href="#">Home</a></li>
                        <li>Admin</li>
                    </ol>
                </div>
            </nav>
        </div>

      
        <div className=" Auth-form-container order col-lg pt-5">
        <div className="row no-gutters">
            <div className="col-lg-7">
            <form className="Auth-form col-lg-10 ">
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">ADMIN LOGIN</h3>
                            <div className="form-group mt-3">
                                <label>User ID</label>
                                <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email" value={user} onChange={(e) => setUser(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                type="password"
                                className="form-control mt-3"
                                placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-success" onClick={handleLogin}>Submit</button>
                                <ToastContainer/>
                            </div>
                            
          
                        </div>
                   </form>
                   
            </div>
            <div className="col-lg-5">
             <h2 className='text-center'>Inventory Management Web Application</h2>   
             <img src={picture} className="p-5 mb-5 order col-lg pt-5" alt="Loading image"/>
            </div>
        </div>
        </div>
    </>
  )
}

export default Login


