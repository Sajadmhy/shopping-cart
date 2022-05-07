import React , {useState} from 'react';
import Header from './Header';
import './style/HomePage.css';
import Search from './Search';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {

const [showSearch, setShowSearch] = useState(false)

const toggleSearch = () => {
    setShowSearch(s => !s)
}
let nav = useNavigate();

return (
    <div className='container'>
       <Header toggleSearch={toggleSearch} />
        <div className='body'>
            <h2>Best Bookstore in the World</h2>
            <p>Books available for preorder.</p>
            <button onClick={() => {nav(`/shop`)}}>SHOP NOW</button>
        </div>
        <div className='search-display' style={{display: showSearch ? "block" : "none"}}><Search toggleSearch={toggleSearch}/></div>
    </div>
);

};