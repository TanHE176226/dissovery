import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Card, Col, Row } from 'react-bootstrap';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Shop.css';
import { CardProduct } from '../../components/cardproduct/CardProduct';



export default function Shop() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/getfood/all")
            .then(response => setItems(response.data))
            .catch(error => console.error(error));
    }, [])
    const render = () => {
        const cards = []
        items.map(item =>
            cards.push(
                <div className="col-lg-3 col-md-4">
                    <CardProduct cardData={item} />
                </div>
            )
        )
        return (
            <div className='container '>
                <div className='row d-flex'>
                    {cards}
                </div>
            </div>
        )
    }

    // mỗi khi thằng set item được trigger (ở bất kì component nào) thì cái shop nó phải f5 lại để render ra dữ liệu items
    return (
        <div>
            <Header foodSearch={setItems} />
            {/*---------------- Banner------------------- */}
            <section className="banner-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/breadcrumb.jpg)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="banner__text">
                                <h2>Dissover Cheaper Food</h2>
                            </div>                            
                        </div>
                    </div>                   
                </div>             
            </section>
            {render()}
            <Footer />
        </div>
    )
}
