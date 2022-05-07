import './style/Search.css'

export default function Search(props) {
    return(
        <div className="container">
            <div className="search-box">
            <button className='close-search' onClick={props.toggleSearch} >X</button>
                <input type="text" id='search' placeholder="Search Books"/>
            </div>
        </div>
    )
}