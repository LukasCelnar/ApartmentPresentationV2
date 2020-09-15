import React from 'react';
import './Vizualizace.scss';

const Vizualizace = () => {
    return (
        <div className='vizualizace'>
            <img className='vizualizace__img-1' src='/imgs/viz1.jpg' alt='viz1' />
            <div className='vizualizace__header-1'>Vizualizace</div>
            <img className='vizualizace__img-2' src='/imgs/viz2.jpg' alt='viz2' />
            <img className='vizualizace__img-3' src='/imgs/viz3.jpg' alt='viz3' />
            <img className='vizualizace__img-4' src='/imgs/viz4.jpg' alt='viz4' />
            <div className='vizualizace__header-2'>Model</div>
            <img className='vizualizace__img-5' src='/imgs/viz5.jpg' alt='viz5' />
            <img className='vizualizace__img-6' src='/imgs/viz6.jpg' alt='viz6' />
        </div>
    );
};

export default Vizualizace;
