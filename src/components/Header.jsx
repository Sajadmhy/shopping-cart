import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './style/Header.css';

export default function Header(props) {
   
return (
    <div className='header'>
            <div className='item'><p>Book Store</p></div>
            <div className='item'><p>Shop</p></div>
            <div className='search item'  ><SearchIcon onClick={props.toggleSearch}/></div>
            <div className='cart item'><ShoppingCartIcon/></div>
    </div>
    )
}