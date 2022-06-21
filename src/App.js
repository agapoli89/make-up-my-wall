import './App.css';

import HomePage from './pages/HomePage/HomePage';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App"> 
    <Header />
    {/* do przejścia między stronami chyba najlepiej użyć react-router-dom i componentu Switch */}
      <HomePage /> 
      <Products />
      <Cart />
    {/* zamknięcie Switcha */}
    <Footer />
    </div>
  );
}

export default App;
