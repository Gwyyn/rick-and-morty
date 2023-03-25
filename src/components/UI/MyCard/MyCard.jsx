import React from 'react';
import cl from './MyCard.module.css'

const MyCard = (props) => {
    return (
        <div className={cl.container}>
            <div className={cl.cta}>
                <img
                    src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
                <div className={cl.text}>
                    <h1>{props.name}</h1>
                    <div className={cl.btnCont}>
                        <button className={cl.glowOnHover}>MORE INFO!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
// <div className={cl.cards}>
//     <div className={cl.cards__item}>
//         <div className={cl.card}>
//             <div className={`${cl.card__image} ${cl.card__imageFence}`}></div>
//             <div className={cl.card__content}>
//                 <div className={cl.card__title}>Flex</div>
//                 <p className={cl.card__text}>This is the shorthand for flex-grow, flex-shrink and flex-basis
//                     combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default
//                     is 0 1 auto. </p>
//                 <button className={`${cl.btn} ${cl.btnBlock}`}>Button</button>
//             </div>
//         </div>
//     </div>
// </div>
export default MyCard;