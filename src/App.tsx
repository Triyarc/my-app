import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
// import Product from './pages/product';
import Navbar from './layouts/navbar';
import Footer from './layouts/footer';
import { DataProvider } from './context/ProductDataContext';
import PetDetails from './pages/productDetails'; 

function App() {
  return (
    <DataProvider>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/pets' element={<Product />} /> */}
          <Route path='/pets/mating' element={<PetDetails />} />
          <Route path='/pets/adoption' element={<PetDetails />} />
          <Route path='/pets/mating/:id' element={<PetDetails />} />
          <Route path='/pets/adoption/:id' element={<PetDetails />} />
        </Routes>
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
