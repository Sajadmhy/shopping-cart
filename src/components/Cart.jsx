import './style/Cart.css'

export default function Cart(props) {
    return(
        <div className='cart-box'>
          <span onClick={props.toggleCart}>X</span>
          <h2>This is a shopping cart</h2>
        </div>
    )
}