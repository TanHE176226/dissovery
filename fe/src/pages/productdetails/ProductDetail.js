import React from 'react'
import axios from 'axios';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './ProductDetail.css';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Validator from '../../helpers/Validation';

export default function ProductDetail() {


    const { id } = useParams(); // Nhận ID sản phẩm từ URL
    const [food, setFood] = useState({});
    const [quantityAdd, setQuantityAdd] = useState(1);
    const [error, setError] = useState({ isValid: true, errorMessage: '' });

    useEffect(() => {
        fetchFood();
    }, [id]);

    //lấy dữ liệu db
    async function fetchFood() {
        try {
            const response = await axios.get(`http://localhost:3001/getfood/${id}`);
            const data = response.data;
            setFood(data);
        } catch (error) {
            console.error('Not Found:', error);
        }
    }

    //xử lý số lượng nhập vào
    const handleQuantityChange = (event) => {
        const valueAdd = event.target.value;
        setQuantityAdd(valueAdd);
        const validationResult = Validator.validateQuantity(
            valueAdd,
            0,
            food.AvaiAmount,
            'Your input quantity is not valid',
            'Your input quantity is out of range');
        setError(validationResult);
    };

    //xử lý Thêm sản phẩm vào giỏ hàng
    const handleAddToCart = async () => {
        if (error.isValid == false) {
            alert(error.errorMessage);
        } else {
            const data =
            {
                foodID: food.ID,
                quantityAdd: quantityAdd
            }
            try {
                const response = await axios.post('http://localhost:3001/cart/addtocart', data);
                console.log(response.data);
                alert(data);
            } catch (error) {
                console.error('Cant add to cart', error);
                alert("Add fail");
            }
        }
    };

    return (
        <div>
            <Header></Header>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__pic">
                            <div className="product__details__pic__item">
                                <img className="product__details__pic__item--large" src={process.env.PUBLIC_URL + "/assets/product-details-1.jpg"} alt />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__text">
                            <h3>{food.Name}</h3>
                            <div className="product__details__price">${food.NormalPrice}</div>
                            <p>{food.Description}</p>
                            <div className="product__details__quantity">
                                <div className="quantity">
                                    <div className="pro-qty">
                                        <input type="text"
                                            placeholder='How many you wanna buy?'
                                            value={quantityAdd}
                                            onChange={handleQuantityChange} />
                                    </div>
                                </div>
                            </div>
                            <button className="primary-btn" onClick={handleAddToCart}>ADD TO CART</button>
                            <ul>
                                <li><b>Availability</b> <span>{food.AvaiAmount}</span></li>
                                <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                                <li><b>Weight</b> <span>0.5 kg</span></li>
                                <li><b>Share on</b>
                                    <div className="share">
                                        <a href="#"><i className="fab fa-facebook" /></a>
                                        <a href="#"><i className="fab fa-twitter" /></a>
                                        <a href="#"><i className="fab fa-instagram" /></a>
                                        <a href="#"><i className="fab fa-pinterest" /></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
