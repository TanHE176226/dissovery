import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import { CardProduct } from '../../components/cardproduct/CardProduct';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  

    

    // async function getFood(){
    //   try {
    //     const response = await axios.get('http://localhost:8800/products');
    //     const data = response.data;
    //     setFood(data);
    //     console.log(data);
    //   } catch (error) {
    //     console.error('Not found: ', error);
    //   }
    // }
     
    let food = [{FoodId : "1", product_name: "Bánh Mì 1", product_description: "Thông tin bánh mì 1"},
                {FoodId : "2", product_name: "Bánh Mì 2", product_description: "Thông tin bánh mì 2"},
                {FoodId : "3", product_name: "Bánh Mì 3", product_description: "Thông tin bánh mì 3"},
                {FoodId : "4", product_name: "Bánh Mì 4", product_description: "Thông tin bánh mì 4"}         
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
        <header>
        <a href="/">Home</a>
        <a href="#">Post Management</a>
        <a href="/login">Login</a>
        <a href="/signup">Register</a>
      </header>
    
      <div class="heading">
        <h1>Dissovery Website</h1>
      </div>
    
   
    {render()}

      <footer>
        &copy; 2023 Your Website. All rights reserved.
      </footer>
      </div>
    )
}
