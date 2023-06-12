import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MyCard } from './MyCard';
import { Col, Row} from 'react-bootstrap';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Shop.css';



export default function Shop() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:3001/shop")
        .then(response => setItems(response.data))
        .catch(error => console.error(error));
    }
    ,[])
   
     const render = () => {
      const cards = []
      items.map(item => 
        cards.push(          
         <Col lg = {4} xs = {4}> 
         <MyCard cardData = {item}/>
         </Col>
        )
      )
      return (
        <Row>
        {cards}
        </Row>)
    }
    
    // mỗi khi thằng set item được trigger (ở bất kì component nào) thì cái shop nó phải f5 lại để render ra dữ liệu items
    return (
        <div>
            <Header foodSearch = {setItems} />
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
            {render()}
            <Footer />
        </div>
    )
}
