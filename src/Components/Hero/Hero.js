import React from 'react'
import './css/Hero.css'
import PictureModel from './img/picture_model.png'
import { ReactComponent as DottedBackground } from './img/dotted_background.svg'
import { ReactComponent as BackgroundShape } from './img/background_shape.svg'
function Hero() {
    return (
        <div className="hero">
            <DottedBackground className="dotted_background" />
            <BackgroundShape className="background_shape" />
            <h1 class="name"><span>Abtahi</span><span>Tajwar</span></h1>
            <img src={PictureModel} className="hero__pictureModel"/>
            <div className="about">
                <p className="small-title">Web Developer</p>
                <h2>I’m a web developer specialized in javascript.</h2>
                <p className="description">Clean , maintainable and portable code is the most desirable and if it is fast than it has to be the best. Now you need it? Hire me now!</p>
                <p className="contact_phone">Phone: +8801796-391053</p>
                <p className="contact_email">Email: abtahitajwar@gmail.com</p>                
            </div>
            
        </div>
    )
}

export default Hero
