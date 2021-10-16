import React from 'react'
import WhiteLogo from '../../assets/img/logo_white.png'
import './css/header.css'



function Header() {
    return (
        <header class="center container-lg">
            <nav>
                <div class="hamburger flex-center">
                    <i class="fas fa-hamburger"></i>
                </div>
                
                <div class="menu">
                    <img src={ WhiteLogo } class="menu__logo" alt="Main Logo" />
                    <ul class="menu__items">
                        <li><a href="">Portfolios</a></li>
                        <li><a href="">Contact Me</a></li>
                        <li><a href="">Articles</a></li>
                    </ul>
                </div>
                <div class="search flex flex-center-v">            
                    <input type="text" placeholder="Search" />
                    <a href=""><i class="fas fa-search"></i></a>
                </div>
                
            </nav>
        </header>
    )
}

export default Header
