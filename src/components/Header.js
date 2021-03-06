import React from 'react'
import Navigation from './Navigation'

const Header = () => {
    // The Theme Toggler Button receives not only the theme
    // but also a toggleTheme function from the context
    return (
        <header className="page-header container">
            <a href="#top" className="logo"><span className="bold-text">Alicia</span> Thomson</a>
            <Navigation menuItems={[
                { anchor: '#about', text: 'About' },
                { anchor: '#skills', text: 'Skills' },
                { anchor: '#work', text: 'Work' },
                { anchor: '#contact', text: 'Contact' }
            ]} />
        </header>
    );
}

export default Header;