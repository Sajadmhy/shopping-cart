import React , {useState} from 'react';
import Header from './Header';
import './style/HomePage.css';
import Search from './Search';

export default function HomePage() {

const [showSearch, setShowSearch] = useState(false)

const toggleSearch = () => {
    setShowSearch(s => !s)
}

return (
    <div className='container'>
       <Header toggleSearch={toggleSearch} />
        <div className='body'>
            <h2>Best Bookstore in the World</h2>
            <p>Books available for preorder.</p>
            <button>SHOP NOW</button>
        </div>
        <div className='search-display' style={{display: showSearch ? "block" : "none"}}><Search/></div>
    </div>
);

};