import React from 'react'
import HotItemCard from "./HotItemCard.jsx"


 const HotAccessories = ({music,musicCover}) =>{
  return (
    <div  className="HotAccessories">
        <div>
          <img src={musicCover} alt="Cover"/>
        </div>
      {/*--------2nd*/}
       <div>
              {music.map((item) => (
                  <HotItemCard key={item.id} name={item.name} price={item.price} Image={item.image} index={item.id}/>
              ))}
      </div>
      </div>
       )}
 export default HotAccessories