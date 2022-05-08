import React , {useState} from 'react';
import Header from './Header';
import './style/HomePage.css';
import Search from './Search';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';

export default function HomePage() {

    const [showSearch, setShowSearch] = useState(false);
    const [showCart, setShowCart] = useState(false);
    let [order, setOrder] = useState([]);

    const toggleSearch = () => {
        setShowSearch(s => !s)
    };
    const toggleCart = () => {
        setShowCart(s => !s)
    };

let nav = useNavigate();

const handleRemove = (e) => {
    const number = e.target.id;
    console.log(number);
    
    setOrder(
        order = order.filter((item,index) => +index !== +number)
        );
};

return (
    <div className='container'>
       <Header toggleSearch={toggleSearch} toggleCart={toggleCart} />
        <div className='body'>
            <h2 className='title'>Best Bookstore in the World</h2>
            <p>Books available for preorder.</p>
            <button className='shop-btn' onClick={() => {nav(`/shop`)}}>SHOP NOW</button>
        </div>
        <div className='search-display' style={{display: showSearch ? "block" : "none"}}><Search toggleSearch={toggleSearch}/></div>
        <div className='cart-display' style={{display: showCart ? "block" : "none"}}><Cart toggleCart={toggleCart} order={order} handleRemove={handleRemove} /></div>
    </div>
);

};