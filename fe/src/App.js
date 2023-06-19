import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import ProductDetail from './pages/productdetails/ProductDetail';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Cart from './pages/cart/Cart';
import { Routes, Route } from 'react-router-dom'
import Shop from './pages/shop/Shop';
<<<<<<< HEAD

=======
>>>>>>> c6bb2c5ff62491ce93a95f5a320110f81e6bb1d6



function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/productdetails" element={<ProductDetail />} />
      <Route exact path="/productdetails/:id" element={<ProductDetail />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/cart/:cartID" element={<Cart />} />
    </Routes>
  );
}

export default App;
