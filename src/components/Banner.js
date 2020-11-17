// Librairies
import React from 'react'
// Style
import bannerPicture from '../assets/Banner.PNG'
import './Banner.css'

const Banner = () => {
    return (
        <div className="Banner">
            <img className="Banner-Image" src={bannerPicture} alt="Banner" />
        </div>
    )
}

export default Banner