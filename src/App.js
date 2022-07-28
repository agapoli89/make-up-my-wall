import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import React from 'react'
import HomePage from './pages/HomePage/HomePage';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  return (

    <div className="App"> 
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
