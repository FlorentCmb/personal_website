// Librairie
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// Style
import './SectionContainer.css'

const SectionContainer = props => {
    // Props
    const { title, text, img, textToRight, link } = props

    // States
    const [isSticky, setIsSticky] = useState(false)

    // When the Navbar is mounted
    useEffect(() => {
        const element = document.querySelector('.SectionContainer')
        let height
        // Add a timeout to avoid a bug on mobile view (height was bigger because when the component mount, the burger menu was still opened)
        setTimeout(() => {
            // Get element's Y position on the page
            height = element.offsetTop
        }, 600)
        // Event listener to decide if the menu is sticky or not
        window.addEventListener('scroll', () => handleScroll(height))

        // Remove the event listener whenever we destroy the component
        return () => window.removeEventListener('scroll', () => handleScroll(height))
    }, [])

    const handleScroll = height => {
        // +54 is the height of the Navbar so that the component won't take its place
        window.pageYOffset + 54 > height ? setIsSticky(true) : setIsSticky(false)
    }

    return (
        <div className={`SectionContainer ${isSticky ? 'SectionContainer-Sticky' : ''}`} title={title}>
            <div className="SectionContainer-Text-Container" style={{ order: textToRight ? 2 : 1 }}>
                <div>
                    <h3 className="SectionContainer-Title">{title}</h3>
                    <p className="SectionContainer-Text">{text} {link ? <a className="SectionContainer-Link" href={link} target="_blank" rel="noreferrer noopener">See more</a> : ''}</p>
                </div>
            </div>
            <div className="SectionContainer-Image-Container" style={{ order: textToRight ? 1 : 2 }}>
                <img className="SectionContainer-Image" src={img} alt={title} title={`Source : ${img}`} />
            </div>
        </div>
    )
}

SectionContainer.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    textToRight: PropTypes.bool,
    link: PropTypes.string,
}

SectionContainer.defaultProps = {
    textToRight: false,
    link: ""
}

export default SectionContainer