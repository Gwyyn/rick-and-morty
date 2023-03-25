import React from 'react';
import MyCard from "./UI/MyCard/MyCard";
import cl from "./styles/CardList.module.css"
import CardItem from "./CardItem";

const CardList = ({cards, setSelectedItem}) => {

    return (
        <>
            <div className={cl.containerCards}>
                {cards.map((card) =>
                    <CardItem card={card} key={card.id} setSelectedItem={setSelectedItem}/>
                )}
            </div>

        </>

    );
};

export default CardList;