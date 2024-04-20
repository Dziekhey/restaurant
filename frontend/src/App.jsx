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
import AppTest from '../test.jsx';
import RestaurantForm from './components/RestaurantForm.jsx';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from './services/userContext.jsx';



const App = () => {
  return (
  <UserContextProvider>
  {/* <RestaurantForm /> */}
  {/* <AppTest /> */}
 <Toaster position="top-center" reverseOrder={false} />
 <Routes>
  <Route path='/' element={<UserLogin />} />
  <Route path='/homepage' element={<HomePage />} />
  <Route path='/account/users/register' element={<UserRegister />} />
  <Route path='/restaurants/:id' element={<RestaurantPage />} />
  <Route path='/cart' element={<CartPage />} />
  <Route path='/userprofile/*' element={<ProfilePage />} />
  <Route path='/account/admin/register' element={<AdminRegister />} />
  <Route path='/account/admin/login' element={<AdminLogin />} />
  <Route path='/account/admin/restaurant-form' element={<RestaurantForm />} />
  <Route path='/adminprofile/*' element={<AdminProfile />} />
 </Routes>
 </UserContextProvider>
  )
}

export default App;