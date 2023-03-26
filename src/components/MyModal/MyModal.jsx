import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import cl from './MyModal.module.css'

const MyModal = ({selectedItem, setSelectedItem}) => {
    const modalRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [outerData, setOuterData] = useState({});
    const nameEpisode = outerData?.name;

    useEffect(() => {
        if (selectedItem) {
            fetchData();
        }
    }, [])

    async function fetchData() {
        try {
            const response1 = await fetch(`${selectedItem.episode[0]}`);
            const outerJson = await response1.json();
            setOuterData(outerJson);
        } catch (e) {
            console.error('Error parsing JSON: ', e)
        }
    }

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

    if (modalRef.current) {
        modalRef.current.style.opacity = 1
    }

    return (
        <div
            ref={modalRef}
            className={cl.myModalWrap}
            onClick={() => {
                modalRef.current.style.opacity = 0;
                setTimeout(() => setSelectedItem(null), 500)
            }}
        >
            <div className={cl.myModal} onClick={(e) => e.stopPropagation()}>
                <div className={cl.title}>
                    {selectedItem?.name}
                </div>
                <div className={cl.myModalContent}>
                    <img src={selectedItem?.image}
                         className={cl.photo}
                    />
                    <div className={cl.infoWrap}>
                        <div>
                            <b>Gender:</b> {selectedItem?.gender}
                        </div>
                        <div>
                            <b>Species:</b> {selectedItem?.species}
                        </div>
                        <div>
                            <b>Status:</b> {selectedItem?.status}
                        </div>
                        <div>
                            <b>Location:</b> {selectedItem?.location.name}
                        </div>
                        <div>
                            <b>Species:</b> {selectedItem?.origin.name}
                        </div>
                        <div>
                            <b>Episode:</b> {nameEpisode}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyModal;