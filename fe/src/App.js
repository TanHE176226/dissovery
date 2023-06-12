import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import ProductDetail from './pages/productdetails/ProductDetail';
import Cart from './pages/cart/Cart';
import { Routes, Route } from 'react-router-dom'
import Shop from './pages/shop/Shop';
import Login from './Login';
import Signup from './Signup';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/productdetails" element={<ProductDetail />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;
