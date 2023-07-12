import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { CardProduct } from '../../components/cardproduct/CardProduct';

export const HomeUser = () => {
    const [logout, setLogout] = useState(false);
  
    const handleLogout = () => {
      // Perform any logout logic here
      setLogout(true);
    };

    if (logout) {
      return <Navigate to="/" replace />;
    }
  let food = [{FoodId : "1", product_name: "Bánh Mì 1", product_description: "Thông tin bánh mì 1"},
                {FoodId : "2", product_name: "Bánh Mì 1", product_description: "Thông tin bánh mì 1"},
                {FoodId : "3", product_name: "Bánh Mì 1", product_description: "Thông tin bánh mì 1"}          
  ]

    const render = () => {
      const cards = []
      food.map(item =>
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
    return (
      <div>
        <Header />
        {render()}
  
        <h2>All Nearly Food</h2>
        
  
        <Footer />
      </div>
    );
  };