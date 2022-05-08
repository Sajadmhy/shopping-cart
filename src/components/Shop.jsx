import React , {useState} from 'react';
import Header from './Header';
import Search from './Search';
import Product from './Product';
import Cart from './Cart';

import harry from '../images/harry-potter.jpg';
import hobbit from '../images/hobbit.jpg';
import slaughter from '../images/slaughterhouse-5.jpg';

import './style/Shop.css';

const data = [
    {
        src: harry,
        name: `Harry Potter`,
        author: `J.K. Rowling`,
        price: `$20`,
    },
    {
        src: hobbit,
        name: "The Hobbit",
        author: "J.J.R. Tolkien",
        price: "$30",
    },
    {
        src: slaughter,
        name: 'Slaughter house-5',
        author: 'Kurt Vonnegut',
        price:'$40',
    },
];

export default function Shop() {

const [showSearch, setShowSearch] = useState(false);
const [showCart, setShowCart] = useState(false);
let [order, setOrder] = useState([]);

const toggleSearch = () => {
    setShowSearch(s => !s)
};
const toggleCart = () => {
    setShowCart(s => !s)
};

const addOrder = (event) => {
    // console.log(event.target.index);
    setOrder(
        order =  [...order ,event.target.id]
    );
};


const handleRemove = (e) => {
    const number = e.target.id;
    console.log(number);
    
    setOrder(
        order = order.filter((item,index) => +index !== +number)
        );
};


return (
    <div className='bg'>
       <Header toggleSearch={toggleSearch} toggleCart={toggleCart}/>
        <div className='main'>
            <div className='product'><Product src={data[0].src} name={data[0].name} author={data[0].author} price={data[0].price} addOrder={addOrder} /></div>
            <div className='product'><Product src={data[1].src} name={data[1].name} author={data[1].author} price={data[1].price} addOrder={addOrder} /></div>
            <div className='product'><Product src={data[2].src} name={data[2].name} author={data[2].author} price={data[2].price} addOrder={addOrder} /></div>
        </div>
        <div className='search-display' style={{display: showSearch ? "block" : "none"}}><Search toggleSearch={toggleSearch}/></div>
        <div className='cart-display' style={{display: showCart ? "block" : "none"}}><Cart toggleCart={toggleCart} order={order} handleRemove={handleRemove} /></div>
    </div>
);

};