import React from 'react'
import WhiteLogo from '../../assets/img/logo_white.png'
import './css/header.css'
import { Box, StaggerAnimation } from '../utils/Style'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Header() {
    
    const [isMobile, setIsMobile] =  useState(false)
    const [isNavOpen, setIsNavOpen] = useState(true)
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
    const [menuReRender, setMenuReRender] = useState(1);
    const [menuHTML, setMenuHTML] = useState('')
    useEffect(() => {
        if(window.innerWidth < 1080) {
            setIsMobile(true)
            setIsNavOpen(false)
        }
    }, [])
    useEffect(() => {
        console.log(menuHTML)
    }, [menuHTML])
    useEffect(() => {
        reRenderMenu()
    }, [isNavOpen])
    window.addEventListener('resize', () => {
        if(window.innerWidth < 1080) {
            setIsMobile(true)
            setIsNavOpen(false)
        } else {
            setIsMobile(false)  
            setIsNavOpen(true)          
        }
    })
    const toggleMenu = () => {        
        setIsNavOpen(prev => !prev, () => {
            reRenderMenu()
        })
        
    }
    const reRenderMenu = () => {
        if(isNavOpen) {
            setMenuHTML(menuItems.map((item, index) => {
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
                            duration: 0.6,
                            delay: index * 0.1
                        }}
                    >
                    <li><a href="#">{item.text}</a></li>
                </motion.div>
            }))
        } else {
            setMenuHTML('')
        }
    }
    return (
        <header className="center container-lg">
            <nav>
                {isMobile
                 && 
                 <div onClick={toggleMenu}>
                    <Box className="hamburger flex-center" match="width">
                        <i className="fas fa-hamburger"></i>
                    </Box>                
                </div>
                }
                
                <div className={"menu " + (isMobile && !isNavOpen ? "invisible" : "")}>
                    <img src={ WhiteLogo } className="menu__logo" alt="Main Logo" />
                    {isMobile && 
                    <div onClick={toggleMenu}>
                        <Box className="closeHamburger flex-center" match="width">
                            <i class="fas fa-times-circle"></i>
                        </Box>
                    </div>
                    }
                    
                    <ul className="menu__items">
                        {menuHTML}
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
