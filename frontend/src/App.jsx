import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from '../src/pages/home/HomePage.jsx'
import RestaurantPage from './pages/restaurant/RestaurantPage';
import CartPage from './pages/cart/CartPage.jsx';
import ProfilePage from './pages/userprofile/ProfilePage.jsx';
import UserRegister from './pages/authUser/UserRegister.jsx';
import UserLogin from './pages/authUser/UserLogin.jsx';
import AdminProfile from './pages/adminprofile/AdminProfile.jsx';
import Footer from './components/Footer.jsx';
import AdminRegister from './pages/authUser/AdminRegister.jsx';
import AdminLogin from './pages/authUser/AdminLogin.jsx';



const App = () => {
  return (
  <>
 <Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/account/users/register' element={<UserRegister />} />
  <Route path='/account/users/login' element={<UserLogin />} />
  <Route path='/restaurants/:id' element={<RestaurantPage />} />
  <Route path='/cart' element={<CartPage />} />
  <Route path='/userprofile/*' element={<ProfilePage />} />
  <Route path='/account/admin/register' element={<AdminRegister />} />
  <Route path='/account/admin/login' element={<AdminLogin />} />
  <Route path='/adminprofile/*' element={<AdminProfile />} />
 </Routes>
  </>
  )
}

export default App;