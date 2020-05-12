import React from "react";
import { Row, Col, ListGroup, Card } from "react-bootstrap";
import { withRouter } from 'react-router-dom'

import "../css/CartItem.css";

const ProductItem = (props) => {
  const url = '/productdetail/' + props.productSortId
  console.log(url)
  return (
    <>
      <div className="col-4 product">
        <div className="card">
          <div className="card_img_wrap">
            <img
              style={{ height: 234 + "px" }}
              className="card-img-top"
              src="../images/product/ps001/p001/p001_001.png"
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <h6 className="card-title">{props.companyName}</h6>
            <h5 className="card-title">{props.productName}</h5>
            {/* <h5 className="card-title">EXTRA DIMENSION SKINFINISH/ EL SEED</h5> */}
            <div
              className="main-title"
              style={{ marginBottom: 40 + "px", marginTop: 40 + "px" }}
            >
              <h2 className="card-text">N.T {props.unitPrice}</h2>
            </div>
            <a href="#">
              <button className="btn-white"
              onClick={ () => props.history.push(url) }
              >
              查看商品細節
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(ProductItem);
