import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import '../node_modules/react-toastify/dist/ReactTostify.css'
import '../node_modules/react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'
import Cart from './component/cart'
import './App.css';
import Home from './component/home'
import Navbar from './component/navbar'
function App() {
  return (
  <>
  <BrowserRouter>
  <ToastContainer/>
  <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
