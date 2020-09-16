import React from 'react';
import './Vizualizace.scss';

const Vizualizace = () => {
    return (
        <div className='vizualizace'>
            <div className='vizualizace__div-1'><img className='vizualizace__img' src='/imgs/viz1.jpg' alt='viz1' /></div>
            <div className='vizualizace__div-2 vizualizace__header-1'><div>Vizualizace</div></div>
            <div className='vizualizace__div-3'><img className='vizualizace__img' src='/imgs/viz2.jpg' alt='viz2' /></div>
            <div className='vizualizace__div-4'><img className='vizualizace__img' src='/imgs/viz3.jpg' alt='viz3' /></div>
            <div className='vizualizace__div-5'><img className='vizualizace__img' src='/imgs/viz4.jpg' alt='viz4' /></div>
            <div className='vizualizace__div-6 vizualizace__header-2'><div>Model</div></div>
            <div className='vizualizace__div-7'><img className='vizualizace__img' src='/imgs/viz5.jpg' alt='viz5' /></div>
            <div className='vizualizace__div-8'><img className='vizualizace__img' src='/imgs/viz6.jpg' alt='viz6' /></div>
        </div>
    );
};

export default Vizualizace;
