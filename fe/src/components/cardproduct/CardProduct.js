import React from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';

const srcc = "/assets/banner.jpg"
export const CardProduct = (food) => {
    return (
        <div>
            <div className="card__item">
                <div className="card__item__pic" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${srcc})` }}>
                    <ul className="card__item__pic__hover">
                        <li><NavLink to="/"><i className="fa fa-heart"></i></NavLink></li>
                        <li><NavLink to={`/productdetails/${food.cardData.FoodID}`}><i className="fa fa-eye"></i></NavLink></li>
                        <li><NavLink to="/"><i className="fa fa-shopping-cart"></i></NavLink></li>
                    </ul>
                </div>
                <div className="card__item__text">
                    <h6><a href="/">{food.cardData.Name}</a></h6>
                    <h5>${food.cardData.Name}</h5>
                </div>
            </div>
        </div>
    )
}
