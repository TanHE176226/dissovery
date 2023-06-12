import React from 'react'
import './Card.css';

const srcc = "/assets/banner.jpg"
export default function Card() {
    return (
        <div>
            <div className="card__item">
                <div className="card__item__pic" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${srcc})` }}>
                    <ul className="card__item__pic__hover">
                        <li><a href="/"><i className="fa fa-heart"></i></a></li>
                        <li><a href="/"><i className="fa fa-eye"></i></a></li>
                        <li><a href="/"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div className="card__item__text">
                    <h6><a href="/">Crab Pool Security</a></h6>
                    <h5>$30.00</h5>
                </div>
            </div>
        </div>
    )
}
