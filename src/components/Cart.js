import React,{useContext,useState} from 'react'
import Item from './Item'
import Total from './Total'
import {AppContext} from "../Context"
const Cart = () => {
   const {cart,marketData,setCartView}=useContext(AppContext);
  const [finalAmount,setFinalAmount]=useState([]);
  
  const setFiAmount=(amount,id)=>{
    // console.log(amount,id)
    setFinalAmount((prev)=>{
      const temp={};
      temp[id]=amount;
      console.log(temp)

return(
  [...prev,{"id":id,"amount":amount}]
)
    })
      
  }
  console.log(finalAmount)
  return (<>
    <div className="cart">
    <i class="fa-solid fa-xmark" onClick={()=>setCartView(false)}> </i><span style={{color:"red"}}>close</span>
    <p style={{color:"red",width:"160px"}}>*under Development</p>
    <Total amount={finalAmount}/>
    {
    cart.map((el,i)=>{return(<Item  setFAmount={setFiAmount} finalAmount={finalAmount} ind={i} data={marketData.coins[cart[i].id]} key={i}/>)
    })}
    </div></>
  )
}

export default Cart