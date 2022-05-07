import React , {useState} from 'react';
import Header from './Header';
import './style/HomePage.css';
import Search from './Search';

export default function Shop() {

const [showSearch, setShowSearch] = useState(false)

const toggleSearch = () => {
    setShowSearch(s => !s)
}
return (
    <div className='container'>
       <Header toggleSearch={toggleSearch} />
        <div className='body'>
        </div>
        <div className='search-display' style={{display: showSearch ? "block" : "none"}}><Search toggleSearch={toggleSearch}/></div>
    </div>
);

};