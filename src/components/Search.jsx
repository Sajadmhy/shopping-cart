import './style/Search.css'

export default function Search() {
    return(
        <div className="container">
            <div className="search-box">
                <input type="text" id='search' placeholder="Search Books"/>
            </div>
        </div>
    )
}