import React from "react";
import {  Accordion,ListGroup, Card } from "react-bootstrap";

import "../css/CartItem.css";

const ProductDate = (props) => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          className="text_accordion pl-0"
        >
          商品介紹
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body className=" pl-0">
            {props.productDetail}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="1"
          className="text_accordion pl-0"
        >
          商品特色
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body className=" pl-0">
          {props.productFeature}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="2"
          className="text_accordion pl-0"
        >
          使用方式
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body className=" pl-0">
          {props.productInstruction}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default ProductDate;
