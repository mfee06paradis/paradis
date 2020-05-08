import React from "react";
import { Row, Col, ListGroup, Card } from "react-bootstrap";

import "../css/CartItem.css";

const ProductItem = (props) => {
  return (
    <>
      <div className="col-4 product">
        <div className="card">
          <div className="card_img_wrap">
            <img
              className="card-img-top"
              src="https://via.placeholder.com/250x150"
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{props.cpName}</h5>
            <h5 className="card-title">{props.psName}</h5>
            {/* <h5 className="card-title">EXTRA DIMENSION SKINFINISH/ EL SEED</h5> */}
            <p className="card-text">{props.price}</p>
            <a href="#">
              <button className="btn-white">加入購物車</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
