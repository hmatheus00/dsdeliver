import React from 'react'
import './styles.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from './logo.svg';

function NavBar(){
    return (
        <nav className="main-navbar">
            <Logo className="logo" />
            <Link to="/" className="logo-text">DS Delivery</Link>
        </nav>
    )
}

export default NavBar;