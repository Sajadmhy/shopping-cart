import './style/Cart.css';

export default function Cart(props) {


  return(
        <div className='cart-box'>
          <span onClick={props.toggleCart}>X</span>
          <h2 style={{display: props.order ? 'block' : 'none'}}>The cart is empty!</h2>
          {props.order.map((value, index) => 
           <li className='cart-item' id={value} key={index}>
            {value}<button className='order-close' id={index} onClick={props.handleRemove}>X</button>
            </li>
            )}
        </div>
    )
}