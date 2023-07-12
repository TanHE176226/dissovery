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




import { HomeUser } from './pages/homeuser/HomeUser';
import { useState, createContext } from 'react';


export const Context = createContext([]);
function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);
    // Hàm xử lý đăng nhập thành công
    const handleLogin = () => {
        setLoggedIn(true);
    };
    // Hàm xử lý đăng xuất
    const handleLogout = () => {
        setLoggedIn(false);
    };
  return (
    <Context.Provider value = {{isLoggedIn, setLoggedIn, handleLogin, handleLogout}}>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/productdetails" element={<ProductDetail />} />
      <Route exact path="/productdetails/:id" element={<ProductDetail />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/cart/:cartID" element={<Cart />} />
      <Route exact path="/homeuser" element={<HomeUser />} />
    </Routes>
</Context.Provider>
  );
}

export default App;
