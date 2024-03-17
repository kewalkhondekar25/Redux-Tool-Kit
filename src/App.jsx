import './App.css'
import Navbar from './Components/Navbar'
import CartContainer from './Components/CartContainer'
import { calculateTotals } from './Features/Cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function App() {
  const {cartItems} = useSelector(store => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      <Navbar/>
      <CartContainer/>
    </main>
  )
}

export default App
