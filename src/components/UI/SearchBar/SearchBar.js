import React, { Component } from 'react'
import './SearchBar.css'
class SearchBar extends Component {
    render() {
        return (
            <div className="Search-bar">
                <div className="Search-input"><input type="text" placeholder="Search for Products..." /></div>
                <div className="Search-icon"><i className="fas fa-search"></i></div>
            </div>
        )
    }
}

export default SearchBar
