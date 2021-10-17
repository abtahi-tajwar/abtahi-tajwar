import React from 'react'
import WhiteLogo from '../../assets/img/logo_white.png'
import './css/header.css'
import { Box, StaggerAnimation } from '../utils/Style'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Header() {
    
    const [isMobile, setIsMobile] =  useState(false)
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [menuItems, setMenuItems] = useState([
        { 
            id: 1,
            text: 'Portfolios' 
        },
        { 
            id: 2,
            text: 'Contact Me'
        }, 
        { 
            id: 3,
            text: 'Articles'
        }
    ])
    useEffect(() => {
        if(window.innerWidth < 1080) {
            setIsMobile(true)
        }
    }, [])
    window.addEventListener('resize', () => {
        if(window.innerWidth < 1080) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    })
    const toggleMenu = () => {
        reRenderMenu()
        setIsNavOpen(prev => !prev)
        
    }
    const reRenderMenu = () => {
        setMenuItems(...menuItems)
    }
    return (
        <header className="center container-lg">
            <nav>
                <div onClick={toggleMenu}>
                    <Box className="hamburger flex-center" match="width">
                        <i className="fas fa-hamburger"></i>
                    </Box>                
                </div>
                <div className={"menu " + (isMobile && !isNavOpen ? "invisible" : "")}>
                    <img src={ WhiteLogo } className="menu__logo" alt="Main Logo" />
                    <div onClick={toggleMenu}>
                        <Box className="closeHamburger flex-center" match="width">
                            <i class="fas fa-times-circle"></i>
                        </Box>
                    </div>
                    <ul className="menu__items">
                        {menuItems.map((item, index) => {
                            return <motion.div
                                    key={item.id}
                                    initial={{
                                        opacity: 0,
                                        translateX: -50
                                    }}
                                    animate={{
                                        opacity: 1,
                                        translateX: 0
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1
                                    }}
                                >
                                <li><a href="#">{item.text}</a></li>
                            </motion.div>
                        })}
                        {/* <li><a href="#">Portfolios</a></li>
                        <li><a href="#">Contact Me</a></li>
                        <li><a href="#">Articles</a></li> */}
                        
                    </ul>
                </div>
                <div className="search flex flex-center-v">
                    <div className="search__container">
                        <input type="text" placeholder="Search" />
                        <a href=""><i className="fas fa-search"></i></a>
                    </div>            
                </div>                
            </nav>
        </header>
    )
}

export default Header
