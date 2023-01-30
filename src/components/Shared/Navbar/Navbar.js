import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div id='navbar'>
            <nav>
                <h2>ReactReduxCore</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>Login</li>
                    <li>Register</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;