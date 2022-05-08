import './style/Cart.css'

export default function Cart(props) {
    return(
        <div className='cart-box'>
          <span onClick={props.toggleCart}>X</span>
          <h2>The cart is empty!</h2>
        </div>
    )
}