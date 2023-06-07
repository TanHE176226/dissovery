import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Card from '../../components/cardproduct/Card';

export default function Home() {

    return (
        <div>
            <Header />
            <h2>All Nearly Food</h2>
            <div className='container'>
                <div className='row d-flex'>
                    <div className="col-lg-3 col-md-4">
                        <Card />
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <Card />
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <Card />
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <Card />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
