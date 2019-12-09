import React from "react";
import SCSlider from "./Slider.style";
import arrowSvg from "./../../assets/img/arrow.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function SliderCompo(props) {
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
                    imgSvg.current.style = `left: ${e.clientX}px; top: ${e.clientY}px; transform: rotate(0deg);z-index:22;`;
                    return;
                };

                imgSvg.current.style = `left: ${e.clientX}px; top: ${e.clientY}px; transform: rotate(180deg);z-index:22;`;
                return;
            }
        })
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1,
            partialVisibilityGutter: 10
        }
    };

    const CustomButtonGroupAsArrows = ({ next, previous }) => {
        return (
            <React.Fragment>
                <button onClick={previous} className="btn-prev"></button>
                <button onClick={next} className="btn-next"></button>
            </React.Fragment>
        );
    };

    return (
        <SCSlider as="main">
            <img src={arrowSvg} ref={imgSvg} alt="Arrow logo" />
            <Carousel
                arrows={false}
                className=""
                containerClass="container--slider"
                dotListClass=""
                focusOnSelect={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                showDots={false}
                sliderClass=""
                customButtonGroup={<CustomButtonGroupAsArrows />}
            >

                {
                    props.projectData.map((project, index) => {
                        return (
                            <div index={index} className="slide-perso" key={index}>
                                <img src={`http://localhost:1337${project.caption[0].url}`} alt={project.caption[0].name} />
                                <footer>
                                    <p>{project.name} - {project.description}</p>
                                    <button>VOIR PLUS</button>
                                    <p>{project.id} / {props.projectData.length}</p>
                                </footer>
                            </div>
                        )
                    })
                }
            </Carousel>
        </SCSlider>
    );
}

export default SliderCompo;