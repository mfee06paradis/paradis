import React, { useState } from "react";
import { Row, Col, Carousel, Accordion, Card } from "react-bootstrap";

const CarouselBigImg = (props) => {
 
   

  const createCarousel = () => {

    let carousel = [];
    let imgClass = ""

    let arr1 = [props.imageUrls[props.imageIndex]]
    console.log("arr1 = " + arr1)
    let arr2 = [...props.imageUrls];
    arr2.splice(props.imageIndex, 1);
    console.log("arr2 = " + arr2 + "    SSSSS = " + props.imageUrls)
    const imageArray = arr1.concat(arr2);
    console.log("imageArray = " + imageArray)

    for (let i = 0; i < imageArray.length; i++) {
      
      carousel.push(
        <Carousel.Item key={i}>
         <Card>
              <Card.Img
                variant="top"
                className="img-fluid w-100"
                style={{height:300+"px", objectFit:"cover"}}
                src={props.imageUrls[i]}
              />
            </Card>
        </Carousel.Item>
      );
      
    }

    console.log("carousel =" + carousel)
    // setActiveIndex(props.imageIndex);
    return carousel;
  };

  // ============================================================================
  return <Carousel indicators={false} interval={null} goToSlide={(event)=>{  }}>
  {createCarousel()}
  </Carousel>;
};
export default CarouselBigImg;
