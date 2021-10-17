import React from 'react'
import WhiteLogo from '../../assets/img/logo_white.png'
import './css/header.css'
import { Box } from '../utils/Style'

function Header() {
    return (
        <header className="center container-lg">
            <nav>
                <Box className="hamburger flex-center" match="width">
                    <i className="fas fa-hamburger"></i>
                </Box>                
                <div className="menu">
                    <img src={ WhiteLogo } className="menu__logo" alt="Main Logo" />
                    <ul className="menu__items">
                        <li><a href="#">Portfolios</a></li>
                        <li><a href="#">Contact Me</a></li>
                        <li><a href="#">Articles</a></li>
                    </ul>
                </div>
                <div className="search flex flex-center-v">            
                    <input type="text" placeholder="Search" />
                    <a href=""><i className="fas fa-search"></i></a>
                </div>
                
            </nav>
        </header>
    )
}

export default Header
