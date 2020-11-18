// Librairies
import React from 'react'
// Style
import bannerPicture from '../assets/Banner.PNG'
import './Banner.css'

const Banner = () => {
    return (
        <div className="Banner">
            <img className="Banner-Image" src={bannerPicture} alt="Banner" title="Source : Screenshot I took on my code" />
            <p className="Banner-Text-Container">
                <h2 className="Banner-Title">COMBEAU Florent</h2>
                <span className="Banner-Text">- Junior Fullstack Web Developer -</span>
            </p>
        </div>
    )
}

export default Banner