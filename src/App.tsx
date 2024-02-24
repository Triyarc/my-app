import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
// import Product from './pages/product';
import Navbar from './layouts/navbar';
import Footer from './layouts/footer';
import PetDetails from './pages/productDetails'; 
import Product from './pages/product';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pets/mating' element={<Product />} />
          <Route path='/pets/adoption' element={<Product />} />
          <Route path='/pets/mating/:id' element={<PetDetails />} />
          <Route path='/pets/adoption/:id' element={<PetDetails />} />
          <Route path='/pets/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
