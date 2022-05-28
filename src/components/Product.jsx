// import { useState } from 'react';
import './style/Product.css';

export default function Product(props) {
  
    // let [namePro,setNamePro] = useState([props.name]);

    // const nameSetting = () => {
    //     setNamePro (
    //         namePro= [...namePro, props.name]
    //     )
    // }


return (
    <div className='pro-item'>
            <img src={props.src} alt={props.name}/>
            <p>{props.name}</p>
            <p>{props.author}</p>
            <p>${props.price}<button id={props.name} name={props.price} onClick={props.addOrder} >Add</button></p>
    </div>
    )
}