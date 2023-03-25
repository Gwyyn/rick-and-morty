import MyHeader from "./components/UI/MyHeader/MyHeader";

import CardList from "./components/CardList";
import {useFetching} from "./components/hooks/useFetching";
import CardService from "./components/API/CardService";
import React, {useEffect, useState} from "react";
import {useInView} from 'react-intersection-observer';
import cl from "./components/styles/CardList.module.css";
import BtnScrollToTop from "./components/UI/btnScrollToTop/BtnScrollToTop";
import MyModal from "./components/UI/MyModal/MyModal";


function App() {


    const [cards, setCards] = useState([])
    const [totalPageCount, setTotalPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [shouldLoad, setShouldLoad] = useState(false)
    const [ref, inView] = useInView({
        threshold: 0.75
    })
    const [selectedItem, setSelectedItem] = useState(null);

    // const [fetchCards, isCardLoading, cardError] = useFetching(async () => {
    //     const response = await CardService.getAll()
    //     setCards(response.data);
    // })
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
        }
    }, [inView])

    useEffect(() => {
        if (shouldLoad) {
            page < totalPageCount && setPage(page + 1);
            setShouldLoad(false)
        }
    }, [shouldLoad])


    useEffect(() => {
        fetchCard()
    }, [page])

    async function fetchCard() {
        console.log(page)
        const response = await CardService.getCards(page)
        setCards([...cards, ...response.data.results]);
        console.log(response.data.results);
    }

    async function fetchData() {
        const response = await CardService.getAll();
        console.log(response.data.results)
        console.log("response")
        // setCards(response.data.results);
        setTotalPageCount(response.data.info.pages);
    }

    // console.log(cards)cards

    return (

        <div className="App">
            {!!selectedItem &&
                <MyModal  selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
            }
            <BtnScrollToTop/>
            <MyHeader/>
            <CardList cards={cards} setSelectedItem={setSelectedItem}/>
            <div ref={ref} className={cl.red}></div>

        </div>


    );
}

export default App;
