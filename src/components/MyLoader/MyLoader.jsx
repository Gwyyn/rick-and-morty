import React from 'react';
import cl from './MyLoader.module.css'
const MyLoader = () => {
    return (
        <div>
            <div className={cl.loader}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default MyLoader;