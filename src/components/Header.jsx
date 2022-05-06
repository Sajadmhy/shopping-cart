import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './style/Header.css';

export default function Header() {

return (
    <div className='header'>
            <div className='item'><p>Book Store</p></div>
            <div className='item'><p>Shop</p></div>
            <div className='search item'><SearchIcon/></div>
            <div className='cart item'><ShoppingCartIcon/></div>
    </div>
    )
}