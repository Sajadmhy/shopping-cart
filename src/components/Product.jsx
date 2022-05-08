import './style/Product.css';

export default function Product(props) {

return (
    <div className='pro-item'>
            <img src={props.src} alt={props.name}/>
            <p>{props.name}</p>
            <p>{props.author}</p>
            <p>{props.price}<button>Add</button></p>
    </div>
    )
}