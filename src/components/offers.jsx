import React from 'react'
import Offer from './Offer.jsx'
import "../Styles/offers.css"


const Offers = ({offers}) => {
  return (
    <div className = "offersection">
        {offers.map((item,index)=>(
        <Offer key={item.image} index={index} src={item.image} link={item.url} />
         ))}

    </div>
  )
}

export default Offers