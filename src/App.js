import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart'

function App() {
  const [cartIsShown,setCartIsShown] =useState(false)

  const showCartHnadler=()=>{setCartIsShown(true)}
  const hideCartHandler=()=>{setCartIsShown(false)}
  return (
    <CartProvider>
      {cartIsShown&&<Cart />}
      <Header  onShowCart={showCartHnadler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;


// 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