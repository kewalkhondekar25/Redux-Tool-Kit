import './App.css'
import Navbar from './Components/Navbar'
import CartContainer from './Components/CartContainer'
import { calculateTotals } from './Features/Cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Modal from './Components/Modal'

function App() {
  const {cartItems} = useSelector(store => store.cart);
  const {isModalOpen} = useSelector(store => store.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      {isModalOpen && <Modal/>}
      <Navbar/>
      <CartContainer/>
    </main>
  )
}

export default App
