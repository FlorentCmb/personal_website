// Librairies
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// Style
import './Navbar.css'

const Navbar = () => {

    // States
    const [isSticky, setIsSticky] = useState(false)

    // When the Navbar is mounted
    useEffect(() => {
        // Get element's Y position on the page
        const element = document.querySelector('nav')
        const height = element.offsetTop
        // Event listener to decide if the menu is sticky or not
        window.addEventListener('scroll', () => handleScroll(height))

        // Remove the event listener whenever we destroy the component
        return () => window.removeEventListener('scroll', () => handleScroll(height))
    }, [])

    const handleScroll = height => {
        window.pageYOffset > height ? setIsSticky(true) : setIsSticky(false)
    }

    return (
        <nav className={`Navbar ${isSticky ? 'Navbar-Sticky' : ''}`}>
            <label for="Navbar-Checkbox" className="Navbar-Menu-Toggle">≡</label>
            <input type="checkbox" id="Navbar-Checkbox" className="Navbar-Checkbox" />
            <div className="Navbar-Link-List">
                <Link className="Navbar-Link" to="/">Home</Link>
                <Link className="Navbar-Link" to="/">Experiences</Link>
                <Link className="Navbar-Link" to="/">Skills</Link>
            </div>
        </nav>
    )
}

export default Navbar