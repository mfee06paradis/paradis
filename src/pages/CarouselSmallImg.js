import React from "react";
import { Row, Col, Carousel, Accordion, Card } from "react-bootstrap";

const CarouselSmallImg = (props) => {

  const createCarousel = () => {
    
    let carousel = [];

    // ================  迴圈次數 的設定  ==========================
    // =============================================================

    // 決定 <Carousel.Item> 的 數量 
    const CarouselItem_End = parseInt(props.imageUrls.length / 3) + 1;
    

    console.log("CarouselItem_End =666666666666666666666666 " + CarouselItem_End);
    console.log("imageUrls =++++++++++++++ " + props.imageUrls);


    let aaa = 0;
    let imgCouter = 0;
    for (let i = 0; i < CarouselItem_End; i++) {
      let cardImg = [];
      //Inner loop to create children
      
      for (let j = 0 ; j < 3; j++) {

        if( imgCouter < props.imageUrls.length ){
          cardImg.push(
            <Col sm={12} md={4} key = {imgCouter} onClick={()=>{props.imageClicked(i*3+j)}}>
            <Card>
              <Card.Img
                variant="top"
                className="img-fluid w-100"
                style={{height:70+"px", objectFit:"cover"}}
                src={props.imageUrls[imgCouter]}
              />
            </Card>
          </Col>
          );
        }
        else{
          // cardImg.push(
          //   <Col sm={12} md={4}>
          //   <Card></Card>
          // </Col>
          // );
        }
        imgCouter++;
      }


      aaa = 1000000;
      //Create the parent and add the children
      carousel.push(
        <Carousel.Item key={i}>
          <Row>{cardImg}</Row>
        </Carousel.Item>
      );
    }
    return carousel;
  };

  // ============================================================================
  return (
    <Carousel indicators={false} interval={null}>

      {createCarousel()}
      
    </Carousel>
  );
};
export default CarouselSmallImg;
