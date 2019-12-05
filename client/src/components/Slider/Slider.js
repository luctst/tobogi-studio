import React from "react";
import SCSlider from "./Slider.style";
import arrowSvg from "./../../assets/img/arrow.svg";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

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
                    imgSvg.current.style = `left: ${e.clientX}px; top: ${e.clientY}px; transform: rotate(0deg);z-index:22;`;
                    return;
                };
                
                imgSvg.current.style = `left: ${e.clientX}px; top: ${e.clientY}px; transform: rotate(180deg);z-index:22;`;
                return;
            }
        })
    }, []);

    return (
        <SCSlider as="main">
            <img src={arrowSvg} ref={imgSvg} alt="Arrow logo" />
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={props.projectData.length}
                tag="section"
            >
                <Slider>
                    {
                        props.projectData.map((project, index) => {
                            return (
                                <Slide index={index} innerClassName="slide-perso" key={index}>
                                    <img src={`http://localhost:1337${project.caption[0].url}`} alt={project.caption[0].name}/>
                                    <footer>
                                        <p>{project.name} - {project.description}</p>
                                        <button>VOIR PLUS</button>
                                        <p>{project.id} / {props.projectData.length}</p>
                                    </footer>
                                </Slide>
                            )
                        })
                    }
                </Slider>
                <ButtonBack className="btn-prev"></ButtonBack>
                <ButtonNext className="btn-next"></ButtonNext>
            </CarouselProvider>
        </SCSlider>
    );
}

export default SliderCompo;