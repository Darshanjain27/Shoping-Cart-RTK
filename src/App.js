import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import '../node_modules/react-toastify/dist/ReactTostify.css'
import '../node_modules/react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'
import Cart from './component/cart'
import './App.css';
import Home from './component/home'
import Navbar from './component/navbar'
import Checkout from './component/checkout';
function App() {
  return (
  <>
  <BrowserRouter>
  <ToastContainer/>
  <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      </BrowserRouter>
  </> 
  );
}

export default App;
