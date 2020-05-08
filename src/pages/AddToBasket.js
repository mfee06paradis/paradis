import React from "react";
import {} from "react-bootstrap";

const AddToBasket = (props) => {
  const cartNewItem = {
    memberId: props.memberId,
    productId: props.productId,
    amount: props.amount,
  };
  console.log("cartNewItem = " + cartNewItem);
  return (
    <div className="">
      <h6 className="card-title">{props.companyName}</h6>
      <p className="card-title">{props.productName}</p>

      <div className="" style={{ width: 60 + "%" }}>
        <select className="form-control color_style">
          {props.colors.map((elem) => {
            console.log("elem " + elem);
            return (
              <option value={elem} key={props.productId}>
                {elem}
              </option>
            );
          })}
        </select>
      </div>
      <div className="main-title">
        <h2
          className="card-title unitprice_title"
          style={{
            margin: 20 + "px",
            marginLeft: 0,
            marginRight: 0,
            textAlign: "left",
          }}
        >
          NT. ${props.unitPrice}
        </h2>
      </div>
      <div>
        <input
          type="number"
          className="form-control input_number"
          defaultValue="1"
          min={1}
          max={100}
        />
      </div>
      <div className="">
        <button
          className="btn-white ml-0"
          value={cartNewItem}
          onClick={(event) => {
            // console.log("BTN click  9999 ");
            props.addToCart(cartNewItem);
          }}
        >
          加入購物車
        </button>
      </div>
    </div>
  );
};

export default AddToBasket;
