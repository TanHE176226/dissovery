import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function Header(props) {

    let searchValue = ''
    const handleClick = () => {
        axios.get(`http://localhost:3001/SearchById/${searchValue}`)
            .then(res => { props.foodSearch(res.data); })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {/* -----------------------------HEADER TOP------------------------ */}
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header__top__left">
                                <ul>
                                    <li><i className="fa fa-envelope"></i>Hello</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="header__top__right">
                                <div className="header__top__right__social">
                                    <a href="#"><i className="fab fa-facebook"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-linkedin"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                </div>
                                <div className="header__top__right__auth">
                                    <NavLink to="/login">
                                        <i className="fa fa-user"></i> LOGIN
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------------------HEADER CONTENT -------------------- */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <img src={process.env.PUBLIC_URL + "/Healthy2.png"} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <ul>
                                <li className="active"><NavLink exact to="/">Home</NavLink></li>
                                <li><NavLink to="/shop">Shop</NavLink></li>
                                <li>
                                    <NavLink to="/">Pages</NavLink>
                                    <ul className="header__menu__dropdown">
                                        <li><NavLink to="/productdetails">Shop Details</NavLink></li>
                                        <li><NavLink to="/cart">Shopping Cart</NavLink></li>
                                        <li><NavLink to="/checkout">Check Out</NavLink></li>
                                        <li><NavLink to="/blogdetails">Blog Details</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to="/blog">Blog</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__cart">
                            <ul>
                                <li><a href="/"><i className="fa fa-heart" /> <span>1</span></a></li>
                                <li><a href="/"><i className="fa fa-shopping-bag" /> <span>3</span></a></li>
                            </ul>
                            <div className="header__cart__price">item: <span>$150.00</span></div>
                        </div>
                    </div>
                </div>
                <div className="humberger__open">
                    <i className="fa fa-bars" />
                </div>
            </div>
            {/* ----------------------------HEADER BOTTOM---------------------- */}
            {/* <div className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories">
                                <div className="hero__categories__all">
                                    <i className="fa fa-bars" />
                                    <span>All departments</span>
                                </div>
                                <ul>
                                    <li><a href="/">Fresh Meat</a></li>
                                    <li><a href="/">Vegetables</a></li>
                                    <li><a href="/">Fruit &amp; Nut Gifts</a></li>
                                    <li><a href="/">Fresh Berries</a></li>
                                    <li><a href="/">Ocean Foods</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">
                                        <input type="text" placeholder="What do yo u need?" />
                                        <button type="submit" className="site-btn">SEARCH</button>
                                    </form>
                                </div>
                                <div className="hero__search__phone">
                                    <div className="hero__search__phone__icon">
                                        <i className="fa fa-phone" />
                                    </div>
                                    <div className="hero__search__phone__text">
                                        <h5>+65 11.188.888</h5>
                                        <span>support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hero__item" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/banner.jpg)` }}>
                                <div className="hero__text">
                                    <span>FRUIT FRESH</span>
                                    <h2>Vegetable <br />100% Organic</h2>
                                    <p>Free Pickup and Delivery Available</p>
                                    <a href="/" className="primary-btn">SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="hero hero-normal">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories">
                                <div className="hero__categories__all">
                                    <i className="fa fa-bars" />
                                    <span>All departments</span>
                                </div>
                                <ul>
                                    <li><a href="#">Fresh Meat</a></li>
                                    <li><a href="#">Vegetables</a></li>
                                    <li><a href="#">Fruit &amp; Nut Gifts</a></li>
                                    <li><a href="#">Fresh Berries</a></li>
                                    <li><a href="#">Ocean Foods</a></li>
                                    <li><a href="#">Butter &amp; Eggs</a></li>
                                    <li><a href="#">Fastfood</a></li>
                                    <li><a href="#">Fresh Onion</a></li>
                                    <li><a href="#">Papayaya &amp; Crisps</a></li>
                                    <li><a href="#">Oatmeal</a></li>
                                    <li><a href="#">Fresh Bananas</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">
                                        <div className="hero__search__categories">
                                            All Categories
                                            <span className="arrow_carrot-down" />
                                        </div>
                                        <input onChange={(event) => searchValue = event.target.value} type="text" placeholder="What do yo u need?" />
                                        <button onClick={handleClick} type='submit' className="site-btn">SEARCH</button>
                                    </form>
                                </div>
                                <div className="hero__search__phone">
                                    <div className="hero__search__phone__icon">
                                        <i className="fa fa-phone" />
                                    </div>
                                    <div className="hero__search__phone__text">
                                        <h5>+65 11.188.888</h5>
                                        <span>support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
