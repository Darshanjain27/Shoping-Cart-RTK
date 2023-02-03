import { useDispatch, useSelector } from "react-redux";
import{Link} from "react-router-dom"
import {FaLongArrowAltLeft} from "react-icons/fa"
import { removeFromCart,decreaseCart,addToCart,clearCart, getTotals} from "../features/cartSlice";
import { useEffect } from "react";

const Cart=()=>{
  const cart=useSelector((state)=>state.cart)
   const dispatch=useDispatch();

   useEffect(()=>{
    dispatch(getTotals())
   },[cart,dispatch]);

  const handleRemoveCart=(cartItem)=>{
    dispatch(removeFromCart(cartItem))

  }
  const handleDecreaseCart=(cartItem)=>{
    dispatch(decreaseCart(cartItem))

  }
  const handleIncreaseCart=(cartItem)=>{
    dispatch(addToCart(cartItem))

  }
  const handleClearCart=()=>{
    dispatch(clearCart())

  }
  return(

<div className="cart-container ">
       <h2 >Shopping Cart</h2>
       {cart.cartItems.length===0?(
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to='/'>
              <FaLongArrowAltLeft/>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
):(
 <>
 <div>
 <div className="titles">
    <h3 className="product-title">Product</h3>
    <h3 className="product-price">Price</h3>
    <h3 className="product-Quantity">Quantity</h3>
    <h3 className="product-total">Total</h3>
  </div>
 
  <div className="cart-items">

    {cart.cartItems.map((cartItem)=>(
   
      <>
      
       <div className="cart-item d-flex"key={cartItem.id}>
       <div className="cart-product d-flex ">
        <img src={cartItem.image}alt={cartItem.title} className=""style={{width:"95px"}}/>
       </div>
       <div className="p-3 ms-5 cart-product">
       <h3>{cartItem.title.slice(0,12)}</h3>
       <p>$ {cartItem.price}</p>
       <button onClick={()=>handleRemoveCart(cartItem)}>Remove</button>
       </div>
      </div>
      <div className="card-product-price">
      <h3>$ {cartItem.price}</h3>
    </div>
    <div className="card-product-quantity">
      <button onClick={()=>handleDecreaseCart(cartItem)}>-</button>
      <div className="count">{ cartItem.cartQuantity}</div>
      <button  onClick={()=>handleIncreaseCart(cartItem)}>+</button>
    </div>
    <div className="cart-product-total-price">
      ${cartItem.price * cartItem.cartQuantity}
    </div>
      </>
     
    ))}
  </div>
  <div className="cart-summary">
    <button className="clear-cart" onClick={handleClearCart}>Clear Cart</button>
    <div className="cart-checkout">
      <div className="subtotal">
        <span>Subtotal</span>
        <span className="amount">${cart.cartTotalAmount}</span>
      </div>
      <p>Taxes and shipping calculated at checkout</p>
      <button>Check out</button>
      <div className="continue-shopping">
      <Link to='/'>
              <FaLongArrowAltLeft/>
              <span>Continue Shopping</span>
            </Link>
      </div>
    </div>
  </div>
 </div>
 </>
)
}
   </div>



    
  
  )
}
 
export default Cart
          
         