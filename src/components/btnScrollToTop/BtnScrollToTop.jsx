import React, {useEffect, useState} from 'react';
import cl from './BtnScrollToTop.module.css'
const BtnScrollToTop = () => {
    const [btnScrollToTop, setBtnScrollToTop] = useState(false);

    function scrollFun(){
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                setBtnScrollToTop(true)
            } else {
                setBtnScrollToTop(false)
            }
        })
    }

    useEffect(() => {
        scrollFun()
        return window.removeEventListener("scroll", scrollFun)
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            {btnScrollToTop && (
                <button className={cl.btn}
                    onClick={scrollUp}
                >^</button>
            )}
        </div>
    );
};

export default BtnScrollToTop;