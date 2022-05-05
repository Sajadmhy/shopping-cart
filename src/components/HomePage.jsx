import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './style/HomePage.css';

export default function HomePage() {

return (
    <div className='container'>
        <div className="header">
            <div className='item'><p>Book Store</p></div>
            <div className='item'><p>Shop</p></div>
            <div className='search item'><SearchIcon/></div>
            <div className='cart item'><ShoppingCartIcon/></div>
        </div>
        <div className='body'>
            <h2>Best Bookstore in the World</h2>
            <p>Books available for preorder.</p>
            <button>SHOP NOW</button>
        </div>
    </div>
);

}