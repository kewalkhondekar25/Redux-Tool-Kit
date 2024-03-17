import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../Features/Cart/cartSlice'
import { closeModal } from '../Features/Modal/modalSlice'


const Modal = () => {
    const dispatch = useDispatch();
  return (
    <section style={{display: 'flex', position: 'fixed', top: '200px', left: '425px',zIndex: '1', flexDirection: 'column',placeItems: 'center', justifyContent: 'center',  alignItems: 'center',background: 'gray',
    height: '50vh', width: '50vw'}}>
        <div>
            <h3>Remove all items from your cart?</h3>
        </div>
        <div>
            <button 
            style={{backgroundColor: 'green'}}
            onClick={() => {dispatch(clearCart()), dispatch(closeModal())}}
            >confirm</button>
            
            
            <button 
            style={{backgroundColor: 'red'}}
            onClick={() => dispatch(closeModal())}
            >cancel</button>
            
            
        </div>
    </section>
  )
}

export default Modal
