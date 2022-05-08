import './style/Cart.css';

export default function Cart(props) {
 
  return(
        <div className='cart-box'>
          <span onClick={props.toggleCart}>X</span>
          <h2 style={{display: props.order ? 'block' : 'none'}}>The cart is empty!</h2>
          {props.order.map (i => <p id={[i]}>{[i]}<button className='order-close'>X</button></p>)}
        </div>
    )
}