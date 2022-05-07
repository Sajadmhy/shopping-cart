import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './style/Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
   let nav = useNavigate();
return (
    <div className='header'>
            <div className='item'><p onClick={() => {nav(`/`)}}>Book Store</p></div>
            <div className='item'><p onClick={() => {nav(`/shop`)}}>Shop</p></div>
            <div className='search item'  ><SearchIcon onClick={props.toggleSearch}/></div>
            <div className='cart item'><ShoppingCartIcon/></div>
    </div>
    )
}