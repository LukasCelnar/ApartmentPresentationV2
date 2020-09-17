import React from 'react';
import './Vizualizace.scss';

const Vizualizace = () => {
    return (
        <div className='vizualizace'>
            <div className='vizualizace__div-1'><img className='vizualizace__img' src='/imgs/viz1.jpg' alt='viz1' /></div>
            <div className='vizualizace__div-2 vizualizace__header'><div>Vizualizace</div></div>
            <div className='vizualizace__div-3'><img className='vizualizace__img' src='/imgs/viz2.jpg' alt='viz2' /></div>
            <div className='vizualizace__div-4'><img className='vizualizace__img' src='/imgs/viz3.jpg' alt='viz3' /></div>
            <div className='vizualizace__div-5'><img className='vizualizace__img' src='/imgs/viz4.jpg' alt='viz4' /></div>
            <div className='vizualizace__div-6 vizualizace__header vizualizace__header-empty'></div>

            <div className='vizualizace__div-7'><img className='vizualizace__img' src='/imgs/viz5.jpg' alt='viz5' /></div>
            <div className='vizualizace__div-8 vizualizace__header'><div>Model</div></div>
            <div className='vizualizace__div-9'><img className='vizualizace__img' src='/imgs/viz6.jpg' alt='viz6' /></div>
            <div className='vizualizace__div-10'><img className='vizualizace__img' src='/imgs/viz7.jpg' alt='viz7' /></div>
            <div className='vizualizace__div-11'><img className='vizualizace__img' src='/imgs/viz8.jpg' alt='viz8' /></div>
            <div className='vizualizace__div-12 vizualizace__header vizualizace__header-empty'></div>
        </div>
    );
};

export default Vizualizace;
