import React from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './ProductDetail.css'

export default function ProductDetail() {
    return (
        <div>
            <Header></Header>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__pic">
                            <div className="product__details__pic__item">
                                <img className="product__details__pic__item--large" src={process.env.PUBLIC_URL + "/product-details-1.jpg"} alt />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__text">
                            <h3>Product Name</h3>
                            <div className="product__details__price">$50.00</div>
                            <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                                vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                                quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                            <div className="product__details__quantity">
                                <div className="quantity">
                                    <div className="pro-qty">
                                        <input type="text" defaultValue={1} />
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="primary-btn">ADD TO CARD</a>
                            <ul>
                                <li><b>Availability</b> <span>In Stock</span></li>
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
