import React from "react";
import { } from "react-bootstrap";

const CartDetail = (props) => {
  return (
    <div>
    <div className="main-title">
      <h2>Basket Details</h2>
      <h4>購物明細</h4>
    </div>

    <div className="order_detail_total">
      <div className="form-group row">
        <label className="col-sm-6 col-form-label">
          購買小記
        </label>
        <label className="col-sm-6 col-form-label">
          NT.{props.originalTotal}
        </label>
      </div>
      <div className="form-group row">
        <label className="col-sm-6 col-form-label text_discound">
          折扣優惠
        </label>
        <label className="col-sm-6 col-form-label text_discound">
          -NT.{props.discountTotal}
        </label>
      </div>
      <hr />
      <div className="form-group row">
        <label className="col-sm-6 col-form-label text_total_amount">
          消費總金額
        </label>
        <label className="col-sm-6 col-form-label text_total_amount">
            NT.{ props.originalTotal - props.discountTotal}
        </label>
      </div>
    </div>

    <div className="">
      <button className="btn-pink">繼續購物</button>
      <button
        type="submit"
        className="btn-red"
        onClick={() => {}}
        style={{ float: "right" }}
      >
        繼續結帳
      </button>
    </div>
  </div>
  );
};

export default CartDetail;
