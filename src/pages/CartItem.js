import React from "react";
import { Modal, Row, Col, Carousel, ListGroup, Card } from "react-bootstrap";

import "../css/CartItem.css";
import { IoMdClose } from "react-icons/io";

const CartItem = (props) => {
  return (
    <ListGroup  horizontal={"lg"} key={props.id}>
      <ListGroup.Item style={{ borderWidth: 0 }}>
        <div style={{ maxWidth: 150 + "px", width: 150 + "px" }}>
          <img
            className="img-fluid"
            src="https://via.placeholder.com/300x300"
            alt="..."
          />
        </div>
      </ListGroup.Item>

      <ListGroup.Item className="list_group_name flex_wrap">
        <div>
          <div style={{ paddingBottom: 20 + "px" }}>{props.productName}</div>
          <h6>{props.companyName}</h6>
        </div>
      </ListGroup.Item>

      <ListGroup.Item className="list_group_other flex_wrap">
        <div>{props.unitPrice}</div>
      </ListGroup.Item>
      <ListGroup.Item className="list_group_other flex_wrap">
        <div>
          <input
            type="number"
            className="form-control input_number"
            defaultValue={props.amount}
            min={1}
            max={100}
            onChange={(event) => {
              props.changeInputNumber()(props.itemIndex, event.target.value)} 
            }
          />
        </div>
      </ListGroup.Item>
      <ListGroup.Item className="list_group_other flex_wrap">
        <div>{props.total}</div>
      </ListGroup.Item>
      <ListGroup.Item className="list_group_last flex_wrap_last">
        <div onClick={props.deleteBtnClicked}>
          <IoMdClose size={1.5 + "em"} color={"#BABABA"}>
            <button type="button"></button>
          </IoMdClose>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default CartItem;
