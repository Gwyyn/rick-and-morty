import React from 'react';
import cl from './LogoText.module.css'

const MyHeader = () => {
    return (
        <div className={cl.title}>
            Rick
            <span className={cl.spanAnd}>and</span>
            Morty
        </div>
    );
};

export default MyHeader;