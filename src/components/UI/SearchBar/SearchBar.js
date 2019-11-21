import React, { Component } from 'react'
import './SearchBar.css'
class SearchBar extends Component {
    render() {
        return (
            <div className="Search-bar-container">
                <div className="Search-bar">
                    {/* <SideDrawerToggle click ={this.props.clicked} />  */}
                    <div className="Search-input">
                        <input type="text" placeholder="Search for Products..." />
                    </div>
                    <div className="Search-icon"><i className="fas fa-search"></i></div>
                </div>
            </div>

        )
    }
}

export default SearchBar
