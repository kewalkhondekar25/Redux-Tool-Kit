import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, reset } from '../Features/Cart/cartSlice';
import { openModal } from '../Features/Modal/modalSlice';
import CartItems from './CartItems';

const CartContainer = () => {

    const dispatch = useDispatch();
    const {cartItems, amount, total} = useSelector(store => store.cart);
    if(amount < 1){
        return(
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h3 style={{marginTop: '250px'}}>
                Your Bag is Empty</h3>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        )
    }
  return (
    <section>
        <h3 style={{display: 'flex', justifyContent: 'center'}}>
        Your Bag</h3>
        {
            cartItems.map(item => {
                return <CartItems key={item.id} item={item}/>
            })
        }
        <hr />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h4>Total</h4>
            <h5>$ {total}M</h5>
        </div>
        <button 
        style={{backgroundColor: 'red'}}
        onClick={() => dispatch(openModal())}
        >Clear Cart</button>
    </section>
  )
}

export default CartContainer