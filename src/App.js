import MyHeader from "./components/MyHeader/MyHeader";
import CardList from "./components/CardList/CardList";
import CardService from "./API/CardService";
import React, {useEffect, useState} from "react";
import {useInView} from 'react-intersection-observer';
import cl from "./components/CardList/CardList.module.css";
import BtnScrollToTop from "./components/btnScrollToTop/BtnScrollToTop";
import MyModal from "./components/MyModal/MyModal";
import MyLoader from "./components/MyLoader/MyLoader";


function App() {


    const [cards, setCards] = useState([])
    const [totalPageCount, setTotalPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [shouldLoad, setShouldLoad] = useState(false)
    const [ref, inView] = useInView({
        threshold: 0.95
    })
    const [showLoader, setShowLoader] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    useEffect(() => {
        fetchData()
        scrollUp()
    }, [])

    useEffect(() => {
        if (inView) {
            setShouldLoad(true);
            setShowLoader(true);
        }
    }, [inView])

    useEffect(() => {
        if (shouldLoad) {
            page < totalPageCount && setPage(page + 1);
            setShouldLoad(false);
        }
    }, [shouldLoad])


    useEffect(() => {
        fetchCard()

    }, [page])

    async function fetchCard() {
        if(page === 42){
            setShowLoader(false);
        }
        const response = await CardService.getCards(page)
        setCards([...cards, ...response.data.results]);
        console.log(page);
    }

    useEffect(() => {
        setShowLoader(false);
    }, [cards])

    async function fetchData() {
        const response = await CardService.getAll();
        setTotalPageCount(response.data.info.pages);

    }

    return (
        <div>
            {!!selectedItem &&
                <MyModal selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
            }
            <BtnScrollToTop/>
            <MyHeader/>
            <CardList cards={cards} setSelectedItem={setSelectedItem}/>

            {!showLoader &&
                <div className={cl.loaderWrap}><MyLoader/></div>

            }
            <div ref={ref} className={cl.loadingBar}>
            </div>
        </div>
    );
}

export default App;
