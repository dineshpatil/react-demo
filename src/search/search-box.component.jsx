import React from 'react'
import './search-box.styles.css'

export const Search = (props) => {
    return <input  className="search-box"  type='search' placeholder='Search Monsters' onChange={(e) => props.handleOnSearch(e)}></input>
}