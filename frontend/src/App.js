
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Shop } from './Pages/Shop'; // Import Shop component
//import { ShopCategory } from './Pages/ShopCategory.jsx'; // Import ShopCategory component
import { Product } from './Pages/Product'; // Import Product component
import { Cart } from './Pages/Cart'; // Import Cart component
import { LoginSignup } from './Pages/LoginSignup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {ShopCategory} from './Pages/ShopCategory';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route> 
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignup/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
