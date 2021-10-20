import { useEffect, useState } from "react";

export default function IceCream(){
     const [arr,setArr] = useState([]);

     useEffect(() => {
          fetch('http://localhost:8000/menuData').then(res => res.json()).then(data => {
               console.log(data);
               // console.log(arr)
               setArr(data);
          });
     }, []);

     const iceCreamList = arr.map(el => {
          return (
               <div className='ice-cream' key = {el.id}>
               <div className='card-image'>
                    <img className='image' src={`img/ice-cream-${el.iceCream.id}.svg`} alt=''/>
               </div>
               <div className='info'>
                    <h3 className='info__title'>{el.name}</h3>
                    <span className='info__price'>$ {el.price}</span>
                    <small></small>
                    <span className='info__piece'>{el.quantity} in stock</span>
                    <p className='info__text'>{el.description}</p>
               </div>
           </div>
          );
     })

     return (
          <div className='App'>{iceCreamList}</div>
     )
}
     