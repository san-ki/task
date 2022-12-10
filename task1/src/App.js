import react, {useState} from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { Home, Product, Profile, Cart, NavBar } from './components/Index';
import { appContext } from './AppContext';

function App() {
  const [curProduct, setCurProduct] = useState('ji');
  const [allProducts, setAllProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const value = {curProduct, setCurProduct, allProducts, setAllProducts, productCount, setProductCount};

  return (
    <appContext.Provider value={value}>
      <div className="App mt-5">
        <BrowserRouter>
          <NavBar />
          <div className='d-flex justify-content-center mt-5'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />}/>
              <Route path='/profile' element={<Profile />}/>
              <Route path='/product' element={<Product />}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </appContext.Provider>
  );
}

export default App;
