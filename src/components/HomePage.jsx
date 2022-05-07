import React , {useState} from 'react';
import Header from './Header';
import './style/HomePage.css';
import Search from './Search';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';

export default function HomePage() {

    const [showSearch, setShowSearch] = useState(false);
    const [showCart, setShowCart] = useState(false);
    
    const toggleSearch = () => {
        setShowSearch(s => !s)
    };
    const toggleCart = () => {
        setShowCart(s => !s)
    };

let nav = useNavigate();

return (
    <div className='container'>
       <Header toggleSearch={toggleSearch} toggleCart={toggleCart} />
        <div className='body'>
            <h2>Best Bookstore in the World</h2>
            <p>Books available for preorder.</p>
            <button onClick={() => {nav(`/shop`)}}>SHOP NOW</button>
        </div>
        <div className='search-display' style={{display: showSearch ? "block" : "none"}}><Search toggleSearch={toggleSearch}/></div>
        <div className='cart-display' style={{display: showCart ? "block" : "none"}}><Cart toggleCart={toggleCart}/></div>
    </div>
);

};