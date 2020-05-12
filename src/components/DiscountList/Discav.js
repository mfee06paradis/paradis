  
import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import { Carousel } from 'react-bootstrap'
function ControlledCarousel() {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }

    useEffect(() => {
        AOS.init({
            once: true,
            easing: 'ease-in-out',
            duration: 800,
        });
    }, []);



    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>

            <Carousel.Item>
                <div className="disFirstSlide"></div>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className="disSecondSlide"></div>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="disThirdSlide"></div>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="disFourSlide"></div>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="disFiveSlide"></div>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    )
}
export default ControlledCarousel