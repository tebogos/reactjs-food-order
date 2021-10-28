import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown,setCartIsShown] =useState(false)

  const showCartHnadler=()=>{setCartIsShown(true)}
  const hideCartHandler=()=>{setCartIsShown(false)}
  return (
    <CartProvider>
      {cartIsShown&&<div>Cart...</div>}
      <Header  onShowCart={showCartHnadler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
