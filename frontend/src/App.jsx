import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import HomePage from '../src/pages/home/HomePage.jsx'
import RestaurantPage from './pages/restaurant/RestaurantPage';
import CartPage from './pages/cart/CartPage.jsx';


const App = () => {
  return (
    <>
   <Navbar />
  {/* <HomePage /> */}
   {/* <RestaurantPage /> */}
   <CartPage />
    </>
  )
}

export default App;