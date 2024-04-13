import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';


const App = () => {
  return (
    <>
   <Navbar />
   {/* <HomePage /> */}
   <RestaurantPage />
    </>
  )
}

export default App;