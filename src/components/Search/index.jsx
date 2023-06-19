import React from "react"
import "./Search.css"
const Search = ({search, searchInput, handleSearch, isDarkMode}) => {
    return (
    <div>
        <input 
            className={`search ${isDarkMode && "darkModeSearch"}`} 
            type="text" value={search} ref={searchInput} 
            onChange={handleSearch} 
            placeholder="Search characters..."/>
    </div>
    )
}

export default Search;

