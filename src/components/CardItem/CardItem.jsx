import React from 'react';
import cl from "./CardItem.module.css";

const CardItem = (props) => {
    return (
        <div className={cl.container}>
            <div className={cl.cta}>
                <img
                    // src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
                    src={props.card.image}/>
                <div className={cl.text}>
                    <h1>{props.card.name}</h1>
                    <div className={cl.btnCont}>
                        <button className={cl.glowOnHover} onClick={()=>props.setSelectedItem(props.card)}>MORE INFO!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardItem;