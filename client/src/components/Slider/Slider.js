import React from "react";
import Slider from "react-slick";
import SCSlider from "./Slider.style";
import arrowSvg from "./../../assets/img/arrow.svg";

function SliderCompo (props) {
    const imgSvg = React.useRef(null);
    let sliderMethod = null;
    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    
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
            <Slider {...settings} ref={c => sliderMethod = c}>
                {props.projectData.map((project, index) => {
                    return (
                        <React.Fragment key={index}>
                            <p>{project.name} - {project.description}</p>
                            <button>VOIR PLUS</button>
                            <p>{project.id} / {props.projectData.length}</p>
                        </React.Fragment>
                    );
                })}
            </Slider>
        </SCSlider>
    );
}

export default SliderCompo;