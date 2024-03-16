import React from 'react'
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { removeItem } from '../Features/Cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItems = ({item}) => {

    const {id, name, manufacturer, price, image} = item;
    const dispatch = useDispatch();
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{display: 'flex', padding: '50px', alignItems: 'center', gap: '50px'}}>
            <img src={image} alt={name} height={150}/>
            <div>
                <h3>{name}</h3>
                <h4>$ {price}M</h4>
                <MdDelete 
                style={{height: '25px', width: '25px', color: 'red'}}
                onClick={() => dispatch(removeItem(id))}/>
            </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <MdOutlineKeyboardArrowUp onClick={() => alert(`${id} clicked`)} />
            <span>0</span>
            <MdOutlineKeyboardArrowDown />
        </div>
    </div>
  )
}

export default CartItems