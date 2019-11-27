import React from "react";
import Slider from "react-slick";
import Container from "./../../styles/Container";

function SliderCompo (props) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    
    return (
        <Container as="section">
            <Slider {...settings}>
                {props.projectData.map((project, index) => {
                    return (
                        <div className="swiper-slide">
                            <h1 key={index}>{project.name}</h1>
                        </div>
                    );
                })}
            </Slider>
        </Container>
    );
}

export default SliderCompo;