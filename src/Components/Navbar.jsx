import React from 'react'
import { BsCart4 } from "react-icons/bs";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const {amount} = useSelector((store => store.cart));
  return (
   <nav>
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h3>Redux Tool Kit</h3>    
        <div style={{display: "flex"}}>
            <BsCart4 style={{height: "30px", width: "30px"}} />
            <span style={{
                backgroundColor: "green",
                borderRadius: "50%",
                height: "20px",
                width: "20px",
                padding: "3px"
            }}>{amount}</span>
        </div>
    </div>
   </nav>
  )
}

export default Navbar