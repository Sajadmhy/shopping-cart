import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function HomePage() {

return (
    <div className='container'>
        <div className="header">
            <p>Sajad's Shop</p>
            <p>Shop Now</p>
            <div className='search'><SearchIcon/></div>
            <div className='cart'><ShoppingCartIcon/></div>
        </div>
    </div>
);

}