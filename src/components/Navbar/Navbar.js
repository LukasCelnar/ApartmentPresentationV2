import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import navbarLinks from './navbarLinks.json'
import './Navbar.scss';

const Navbar = () => {
    const [currentBtn, setCurrentBtn] = useState(0)

    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -90; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const renderButtons = () => {

        return navbarLinks.map((navLink, i) => {
            const buttonClass = `navbar__button ${i === currentBtn ? 'navbar__button-selected' : ''}`

            return (
                <li key={i} onClick={() => setCurrentBtn(i)} className={buttonClass}>
                    <Link to={navLink.to} scroll={scrollWidthOffset} className='navbar__button-link'>
                        {navLink.name}
                    </Link>
                </li>
            );
        });
    };

    return (
        <div className='navbar'>
            <img className='navbar__logo' src='/imgs/logo.jpg' alt='logo' />
            <ul className='navbar__buttons'>
                {renderButtons()}
            </ul>
        </div>
    );
};

export default Navbar;