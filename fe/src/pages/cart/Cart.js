import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './Cart.css'

export default function Cart() {
    const { cartID } = useParams();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/cart/${cartID}`)
            .then(response => {
                setCartItems(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [cartID]);
    console.log(cartItems);

    const handleRemoveItem = (foodID) => {
        console.log("This is foodID in handleRemoveItem: " + foodID);
        axios
            .post(`http://localhost:3001/cart/remove/${cartID}`, { foodID })
            .then((response) => {
                // Update the state variable with the latest cart items data
                setCartItems(response.data.foodList);
                // Force a page reload
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                // Redirect to the same URL
                window.location.href = window.location.href;
            });
    };

    return (
        <div>
            <Header />
            <div className='container'>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__table">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="shoping__product">Products</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems && cartItems.foodList && cartItems.foodList.map(cartItem => (
                                        <tr>
                                            <td className="shoping__cart__item">
                                                <div class="d-flex">
                                                    <img src={process.env.PUBLIC_URL + `/assets/${cartItem.Picture}`} alt="" />
                                                </div>
                                                <div class="media-body">
                                                    <h5>{cartItem.Name}</h5>
                                                </div>
                                            </td>
                                            <td className="shoping__cart__price">
                                                {cartItem.SalePrice}
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-danger" onClick={() => handleRemoveItem(cartItem.FoodID)}>
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__btns">
                            <a href="#" className="primary-btn cart-btn">CONTINUE SHOPPING</a>
                            <a href="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading" />
                                Upadate Cart</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="shoping__continue">
                            <div className="shoping__discount">
                                <h5>Discount Codes</h5>
                                <form action="#">
                                    <input type="text" placeholder="Enter your coupon code" />
                                    <button type="submit" className="site-btn">APPLY COUPON</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="shoping__checkout">
                            <h5>Cart Total</h5>
                            <ul>
                                <li>Subtotal <span>$454.98</span></li>
                                <li>Total <span>$454.98</span></li>
                            </ul>
                            <a href="#" className="primary-btn">PROCEED TO CHECKOUT</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
