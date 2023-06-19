import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';


export const HomeUser = () => {
    const [logout, setLogout] = useState(false);
  
    const handleLogout = () => {
      // Perform any logout logic here
      setLogout(true);
    };
  
    if (logout) {
      return <Navigate to="/" replace />;
    }
  
    return (
      <div>
        <Header />
  
        <h2>All Nearly Food</h2>
        
  
        <Footer />
      </div>
    );
  };