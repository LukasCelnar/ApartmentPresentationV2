import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    const [currentBtn, setCurrentBtn] = useState(0)


    const renderButtons = () => {
        const items = ['info', 'poloha', 'video', 'karta', 'vizualizace', 'model', 'brožura', 'kontakt']

        return items.map((item, i) => {
            const linkPath = item === 'info' ? '/' : item === 'brožura' ? '/brozura' : `/${item}`
            const buttonClass = `navbar__button ${i === currentBtn ? 'navbar__button-selected' : ''}`

            return (
                <li key={i} onClick={() => setCurrentBtn(i)} className={buttonClass}>
                    <Link to={linkPath} className='navbar__button-link'>
                        {item}
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