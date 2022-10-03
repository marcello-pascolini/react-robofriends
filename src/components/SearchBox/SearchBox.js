import React from "react";
import './SearchBox.css'

const SearchBox = ({searchRobots}) => {
    return (
        <div className="search-box">
            <input 
                type="search" 
                placeholder="search robots"
                onChange={searchRobots}
                />
        </div>
        
    )
}

export default SearchBox