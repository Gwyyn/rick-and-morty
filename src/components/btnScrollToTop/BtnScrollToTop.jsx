import React, {useEffect, useState} from 'react';

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
                <button
                    style={{
                        position: "fixed",
                        bottom: "50px",
                        right: "30px",
                        height: "45px",
                        width: "50px",
                        fontSize: "50px",
                        zIndex: 1,
                        borderRadius: "13px",
                        background: "#08BAE3",
                        border: "none"
                    }}
                    onClick={scrollUp}
                >^</button>
            )}
        </div>
    );
};

export default BtnScrollToTop;