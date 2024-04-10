import './App.css';

//Bootstrap imported
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

//All componoents imported
import Navbar from './componoents/Navbar/Navbar';
import Home from './componoents/Home/Home';
import Abouts from './componoents/Abouts/Abouts';
import Work from './componoents/Abouts/Work';
import Service from './componoents/Service/Service';
import FeaturedServices from './componoents/Service/FeaturedServices/FeaturedServices';
import Contact from './componoents/Contact/Contact';
import Footer from './componoents/Footer/Footer';
import ScrollToTop from './componoents/Scrolltotop/ScrollToTop';
import Login from './componoents/Loginadmin/Login';




import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Prodcut from './componoents/Dashboard/Prodcut/Prodcut';
import Getproduct from './componoents/Dashboard/Prodcut/Getproduct';
import ProductUpdateForm from './componoents/Dashboard/Prodcut/Updateproduct';
import Loginmessage from './componoents/Loginadmin/Loginmessage';
import Dashboard from './componoents/Dashboard/Dashboard';
import Deleteproduct from './componoents/Dashboard/Prodcut/Deleteproduct';

;

function App() {


  return (
    <>
     
   
{/*    
     <UpdateProduct/> */}
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/'  index element={[<Home/>,<FeaturedServices/>,<Abouts/>,<Work/>,<Service/>,<Contact/>]}/>
        <Route path='/home'   element={<Home/>}/>
        <Route path='/products access'  element={[<Prodcut/>,<Abouts/>]}/>
        <Route path='/getproduct'  element={  <Getproduct/>}/>
        <Route path='/updateproduct'  element={<ProductUpdateForm/>}/>
        <Route path='/dashboard'   element={ <Dashboard/>}/>
        <Route path='/about'   element={[<Abouts/>,<Work/>]}/>
        <Route path='/how it work'   element={<Work/>}/>
        <Route path='/service' element={[<FeaturedServices/>,<Service/>]}/>
        <Route path='/contact' element={ <Contact/>}/>
        <Route path='/login'   element={ <Login/>}/>
        <Route path='/loginmessage'  element={<Loginmessage/> }/>
      </Routes>
     <Footer/>
     <ScrollToTop/> 
    </BrowserRouter>
    
   
    
    
    
    
    
   
    
    
    </>
  );
}

export default App;
