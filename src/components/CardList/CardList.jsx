import React from 'react';
import cl from "./CardList.module.css"
import CardItem from "../CardItem/CardItem";

const CardList = ({cards, setSelectedItem}) => {
    return (
        <div className={cl.containerCards}>
            {cards.map((card) =>
                <CardItem card={card} key={card.id} setSelectedItem={setSelectedItem}/>
            )}
        </div>
    );
};

export default CardList;