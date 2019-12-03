import React from "react";
import SCSlider from "./Slider.style";
import arrowSvg from "./../../assets/img/arrow.svg";

function SliderCompo (props) {
    const imgSvg = React.useRef(null);
    
    React.useEffect(() => {
        window.addEventListener("mousemove", e => {
            e.stopPropagation();

            if (imgSvg.current) {
                if (document.querySelector("#modal") && document.querySelector("#modal").contains(e.target)) {
                    imgSvg.current.style = "display: none;";
                    return;
                }
    
                if (document.querySelector("header").contains(e.target)) {
                    imgSvg.current.style = "display: none;";
                    return;
                }
                
                if (e.clientX > window.innerWidth / 2) {
                    imgSvg.current.style = `left: ${e.clientX}px; top: ${e.clientY}px; transform: rotate(0deg);`;
                    return;
                };
                
                imgSvg.current.style = `left: ${e.clientX}px; top: ${e.clientY}px; transform: rotate(180deg);`;
                return;
            }
        })
    }, []);

    return (
        <SCSlider as="main">
            <img src={arrowSvg} ref={imgSvg} alt="Arrow logo" />
        </SCSlider>
    );
}

export default SliderCompo;