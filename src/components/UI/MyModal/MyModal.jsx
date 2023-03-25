import React, {useEffect, useState} from 'react';
import cl from './MyModal.module.css'

const MyModal = ({selectedItem, setSelectedItem}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [outerData, setOuterData] = useState({});


    useEffect(()=>{
        async function fetchData() {
            try {
                const response1 = await fetch(`${selectedItem.episode[0]}`);
                const outerJson = await response1.json();
                setOuterData(outerJson);
            }catch (e){
                console.error('Error parsing JSON: ', e)
            }
        }
        fetchData();
    })
    const nameEpisode = outerData.name;


    useEffect(() => {
        if (selectedItem) {
            setIsModalOpen(true);
        } else {
            setIsModalOpen(false);
        }
    }, [selectedItem])

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    const rootClasses = [cl.myModal]
    if (selectedItem) {
        rootClasses.push(cl.active);
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => setSelectedItem(null)}>
            <div className={cl.name}>
                {selectedItem.name}
            </div>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                <img src={selectedItem.image}
                     className={cl.photo}
                />
                <div className={cl.gender}>
                    <b>Gender:</b> {selectedItem.gender}
                </div>
                <div className={cl.info}>
                    <b>Species:</b> {selectedItem.species}
                </div>
                <div className={cl.info}>
                    <b>Status:</b> {selectedItem.status}
                </div>
                <div className={cl.info}>
                    <b>Location:</b> {selectedItem.location.name}
                </div>
                <div className={cl.info}>
                    <b>Species:</b> {selectedItem.origin.name}
                </div>
                <div className={cl.info}>
                    <b>Episode:</b> {nameEpisode}
                </div>
            </div>
        </div>
    );
};

export default MyModal;