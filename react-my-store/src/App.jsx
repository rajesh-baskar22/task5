import React, { useState } from 'react'
import  Navbar  from './components/Navbar'
import ProductList from './components/ProductList'
import CartModal from './components/CartModal';


function App() {
      const [cartItems,setCartItems] = useState([]);
      const[isCartOpen, setIsCartOpen] = useState(false);

      const openCart = () =>{
            setIsCartOpen(true);
      };

      const closeCart =() =>{
        setIsCartOpen(false);
      };
      const removeCart =(productId) =>{
        setCartItems(cartItems.filter((item)=> item.id !== productId ))
      };
  return (
    <div className='bg-gray-300 min-h-screen'>
        <Navbar cartCount={cartItems.length} openCart ={openCart}/>
        <ProductList cartItems={cartItems} setCartItems={setCartItems} />
        {
           isCartOpen && (
            <CartModal cartItems={cartItems} closeCart={closeCart} removeCart={removeCart} />
           )
        }
       
    </div>
  )
}

export default App
