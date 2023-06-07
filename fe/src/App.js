import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import ProductDetail from './pages/productdetails/ProductDetail';
import Cart from './pages/cart/Cart';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/productdetails" element={<ProductDetail/>}/>
    </Routes>
  );
}

export default App;
