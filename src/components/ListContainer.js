// Librairies
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// Style
import './ListContainer.css'

const AnimatedList = props => {

    // Props
    const { title, listArray } = props

    // States
    const [isSticky, setIsSticky] = useState(false)

    // When the Navbar is mounted
    useEffect(() => {
        const element = document.querySelector('.AnimatedList')
        let height
        // Add a timeout to avoid a bug on mobile view (height was bigger because when the component mount, the burger menu was still opened)
        setTimeout(() => {
            // Get element's Y position on the page
            height = element.offsetTop
        }, 600)
        // Event listener to decide if the section is sticky or not
        window.addEventListener('scroll', () => handleScroll(height))

        // Remove the event listener whenever we destroy the component
        return () => window.removeEventListener('scroll', () => handleScroll(height))
    }, [])

    const handleScroll = height => {
        // +54 is the height of the Navbar so that the component won't take its place
        window.pageYOffset + 54 > height ? setIsSticky(true) : setIsSticky(false)
    }

    return (
        <div className={`AnimatedList ${isSticky ? 'AnimatedList-Sticky' : ''}`}>
            <h3 className="AnimatedList-Title">{title}</h3>
            <div className="AnimatedList-Content">
                {listArray.map((item, index) => (
                    <div className="AnimatedList-Text-Container" key={`List element n°${index + 1}`}>
                        <p className="AnimatedList-Text">
                            {item.name} : <span className="AnimatedList-Value">{item.value}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

AnimatedList.propTypes = {
    title: PropTypes.string.isRequired,
    listArray: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.element.isRequired,
        value: PropTypes.string.isRequired,
    }))
}

export default AnimatedList