import './style/Cart.css';

export default function Cart(props) {


  return(
        <div className='cart-box'>
          <span onClick={props.toggleCart}>X</span>
          <h2 style={{display: props.isEmpty ? 'block' : 'none'}}>The cart is empty!</h2>
          <div className='order-items'>{props.order.map((value, index) => 
           <li className='cart-item' id={value} key={index}>
            {value[0]}{'  '}${value[1]}<button className='order-close' id={index} onClick={props.handleRemove}>X</button>
            </li>
            )}
          </div>
          <hr/>
          <div className='final-price'> Final Price: ${props.finalPrice}</div>
        </div>
    )
}