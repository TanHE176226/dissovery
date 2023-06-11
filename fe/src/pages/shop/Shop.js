import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Shop.css';


export default function Shop() {
    return (
        <div>
            <Header />
            {/*---------------- Banner------------------- */}
            <section className="banner-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/breadcrumb.jpg)` }}>
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

            <Footer />
        </div>
    )
}
