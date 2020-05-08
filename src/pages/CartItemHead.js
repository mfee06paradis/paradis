import React from "react";
import { Modal, Row, Col, Carousel, ListGroup, Card } from "react-bootstrap";

import "../css/CartItem.css";

const CartItemHead = (props) => {
  const listgroup = (
    <ListGroup horizontal>
      <ListGroup.Item style={{ borderWidth: 0 }} className="backgrond_color">
        <div style={{ maxWidth: 150 + "px", width: 150 + "px" }}>
          商品
        </div>
      </ListGroup.Item>

      <ListGroup.Item className="list_group_name flex_wrap backgrond_color">
        <div>
          
        </div>
      </ListGroup.Item>

      <ListGroup.Item className="list_group_other flex_wrap backgrond_color">
        <div>單價</div>
      </ListGroup.Item>
      <ListGroup.Item className="list_group_other flex_wrap backgrond_color">
        <div>
          數量
        </div>
      </ListGroup.Item>
      <ListGroup.Item className="list_group_other flex_wrap backgrond_color">
        <div>總金額</div>
      </ListGroup.Item>
      <ListGroup.Item className="list_group_last flex_wrap backgrond_color">
        <div></div>
      </ListGroup.Item>
    </ListGroup>
  );
  return listgroup;
};

export default CartItemHead;
