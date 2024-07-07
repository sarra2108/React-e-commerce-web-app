
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';


import Contact from'./Pages/Contact';
import Contactus from'./Pages/Contact_us';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/products' element={<ShopCategory  category="products"/>}/>
        
        
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/contact' element={<Contact/>} /> 
        <Route path='/contact_us' element={<Contactus />} /> 
       
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
