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

    // Functions
    const handleScroll = height => {
        window.pageYOffset > height ? setIsSticky(true) : setIsSticky(false)
    }
    
    const hideBurger = () => {
        document.querySelector('#Navbar-Checkbox').checked = false
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <nav className={`Navbar ${isSticky ? 'Navbar-Sticky' : ''}`}>
            <label htmlFor="Navbar-Checkbox" className="Navbar-Menu-Toggle">≡ Menu</label>
            <input type="checkbox" id="Navbar-Checkbox" className="Navbar-Checkbox" />
            <div className="Navbar-Link-List">
                <Link className="Navbar-Link" to="/" onClick={hideBurger}>Home</Link>
                <Link className="Navbar-Link" to="/professional-background" onClick={hideBurger}>Professional background</Link>
                <Link className="Navbar-Link" to="/" onClick={hideBurger}>Skills</Link>
            </div>
        </nav>
    )
}

export default Navbar