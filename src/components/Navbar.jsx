import React from 'react';
import SearchBar from './SearchBar';

class Navbar extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <div className='logo'>
                    <img src="../public/images/logo.svg" alt="" />
                    <p>Notify</p>
                </div>
                <SearchBar />
            </div>
        )
    }
}

export default Navbar;