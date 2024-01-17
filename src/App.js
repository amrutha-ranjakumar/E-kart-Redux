import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>

      <Footer />




    </div>
  );
}

export default App;
