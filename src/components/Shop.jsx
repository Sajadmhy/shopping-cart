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
        name: "Hobbit",
        author: "J.J.R. Tolkien",
        price: "$30",
    },
    {
        src: slaughter,
        name: 'Slaughterhouse-5',
        author: 'Kort Vonnegut',
        price:'$40',
    },
];

export default function Shop() {

const [showSearch, setShowSearch] = useState(false);
const [showCart, setShowCart] = useState(false);

const toggleSearch = () => {
    setShowSearch(s => !s)
}
const toggleCart = () => {
    setShowCart(s => !s)
}
return (
    <div className='bg'>
       <Header toggleSearch={toggleSearch} toggleCart={toggleCart}/>
        <div className='main'>
            <div className='product'><Product src={data[0].src} name={data[0].name} author={data[0].author} price={data[0].price} /></div>
            <div className='product'><Product src={data[1].src} name={data[1].name} author={data[1].author} price={data[1].price} /></div>
            <div className='product'><Product src={data[2].src} name={data[2].name} author={data[2].author} price={data[2].price} /></div>
        </div>
        <div className='search-display' style={{display: showSearch ? "block" : "none"}}><Search toggleSearch={toggleSearch}/></div>
        <div className='cart-display' style={{display: showCart ? "block" : "none"}}><Cart toggleCart={toggleCart}/></div>
    </div>
);

};