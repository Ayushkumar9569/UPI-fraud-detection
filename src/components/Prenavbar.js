import React from "react";
import "../Styles/Prenavbar.css"
import Carticon from"../Svgs/cart.js" ;

const Prenavbar = () =>{
  return(
    <div className="Prenav">
      <div>
        <a href="https://www.mi.com/in/store/">Store</a> <span>|</span>
        
        <a href= "https://www.mi.com/in/phone/">Phones</a> <span>|</span>
        <a href="https://www.mi.com/in/tablet/">Tablets</a> <span>|</span>
        <a href="https://www.mi.com/in/tv-smart-home/">Tv and Smart Home</a> <span>|</span> 

        <a href="https://www.mi.com/in/watch-audio">Smart Watches</a>
      </div>
      <div>
        <a href="https://mi.com/in/discover/">Discover</a> <span>|</span>
        <a href="https://www.mi.com/in/support/">Support</a> <span>|</span>
        <a href="https://store.mi.com/in/site/login?redirectUrl=https%3A%2F%2Fwww.mi.com%2Fin%2Fstore%2F">login</a> <span>|</span>
        <a href="https://store.mi.com/in/cart">{Carticon}</a> 
      </div>
    </div>
  )
}

export default Prenavbar