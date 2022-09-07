import React,{useState,useEffect,useContext} from "react";
import { AppContext } from "../Context";

const Item = ({setFAmount,data,ind}) => {
    const {fixed}=useContext(AppContext)
    const {name,price,iconUrl}=data;
    const pric=fixed(price);
    const [quantity,setQuantity]=useState(1);
    const [amount,setAmount]=useState(pric);
    
    
    useEffect(()=>{
      // console.log(quantity)
      setAmount(pric*quantity);
      setFAmount(amount,ind);
    },[quantity,amount,pric])
    // console.log(amount)
    
    
    
    const sub=()=>{
      if(quantity>1){ 
        setQuantity(quantity-1)
        
      }
    }
    const setQuant= ()=>{
      setQuantity(quantity+1);
      
      
    
  }
  return (
    <>
      <div className="Iouter">
        <div className="Iupper">
          <div className="Iimg">
            <img src={iconUrl} alt="img.jg" width="40px" />
          </div>
          <h3>{name}</h3>
        </div>
        <div className="Ilower">
          
            
            <div className="Ibtn">
            <div>Price: {fixed(price)}</div>
            <div className="Iquan">
            <i className="fa-solid fa-minus" onClick={sub}></i>
            <div className="pd">{quantity}</div>
            <i className="fa-solid fa-plus" onClick={setQuant}></i>
            </div></div>
            
            <div className="Iamnt">Amount: {fixed(amount)}</div>
          
        </div>
      </div>
    </>
  );
};

export default Item;
