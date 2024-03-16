import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems';

const CartContainer = () => {
    const {cartItems, amount, total} = useSelector(store => store.cart);
    if(amount < 1){
        return(
            <h3 style={{display: 'flex', justifyContent: 'center', marginTop: '250px'}}>
            Your Bag is Empty</h3>
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
        <button style={{backgroundColor: 'red'}}>Clear Cart</button>
    </section>
  )
}

export default CartContainer