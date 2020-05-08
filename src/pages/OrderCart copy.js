import React from "react";
import { Modal, Row, Col, Carousel, ListGroup } from "react-bootstrap";

function OrderCart() {
  return (
    
      ['sm', 'md', 'lg', 'xl'].map((breakpoint, idx) => (
        <ListGroup horizontal={breakpoint} className="my-2" key={idx}>
        <ListGroup.Item>This ListGroup</ListGroup.Item>
        <ListGroup.Item>renders horizontally</ListGroup.Item>
        <ListGroup.Item>on {breakpoint}</ListGroup.Item>
        <ListGroup.Item>and above!</ListGroup.Item>
      </ListGroup>
      ))
    
  )
}

export default OrderCart;
