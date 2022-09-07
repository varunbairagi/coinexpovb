import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import millify from "millify";
import { AppContext } from "../Context";

const Coins = (props) => {
  const { name, iconUrl, price, marketCap, change, uuid } = props.Values;
  const {cart,setCart,fixed,isLogin}=useContext(AppContext);
  let clr="red";
  let chng=change;
  if(change>0){clr="green";
chng=`+${change}`
}

  const setVal=(id)=>{
    let bo=cart.some(e=>e.id===id);
    // console.log(bo)
    if(!bo)
      {
    setCart((prev)=>{
      return(
        [...prev,{"id":id}]
      )
    })
  }
    console.log(cart)
    
  }
  return (
    <>
      <div className="coindetails">
        <div className="pd first">
          <h4 className="mg pd">{name}</h4>
          <div className="imgd">
            <img src={iconUrl} alt="logo.jpg" />
          </div>
        </div>
        <div className="inside">
          <div>
            <div>
              <span className=" pd" style={{ marginRight: "30px" }}>
                {" "}
                Price :
              </span>
              <span>$ {fixed(price)}</span>
            </div>
            <div>
              <span className=" pd">Market Cap :</span>
              <span>{millify(marketCap)}</span>
            </div><div style={{color:clr}}>
            <span className=" pd">Daily Change :</span>
            <span>{chng}%</span></div>
          </div>
        </div>
        <NavLink to={`/${uuid}`}>
          <button style={{ margin: "10px",fontSize:".8rem" }}>Show Details</button>
        </NavLink>
        {!isLogin&&
          <button style={{ margin: "5px",fontSize:".8rem" }} onClick={()=>setVal(props.id)}>Buy Now</button>}
        
      </div>
    </>
  );
};

export default Coins;
