import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
  return (

    <div className="App"> 
      <BrowserRouter>
        <Header />
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
