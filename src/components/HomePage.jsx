import Header from './Header';
import './style/HomePage.css';

export default function HomePage() {

return (
    <div className='container'>
       <Header/>
        <div className='body'>
            <h2>Best Bookstore in the World</h2>
            <p>Books available for preorder.</p>
            <button>SHOP NOW</button>
        </div>
    </div>
);

}