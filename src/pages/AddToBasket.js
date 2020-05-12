import React, { useState } from "react";
import {} from "react-bootstrap";

const AddToBasket = (props) => {
  const [inputText, setInputText] = useState(1);

  return (
    <div className="">
      <div>
        <h6 className="card-title" style={{ textAlign: "start" }}>
          {props.companyName}
        </h6>
        <p className="card-title" style={{ textAlign: "start" }}>
          {props.productName}
        </p>
      </div>
      <div className="" style={{ width: 60 + "%" }}>
        <select
          className="form-control color_style"
          onChange={(event) => {
            return props.selectColorClicked(event.target.value);
          }}
        >
          {props.colors.map((elem, index) => {
            console.log("elem " + elem);
            return (
              <option value={index} key={index}>
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
          Value={inputText}
          min={1}
          max={100}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
        />
      </div>
      <div className="">
        <button
          className="btn-white ml-0"
          value={5}
          onClick={() => 
            // console.log("BTN click  9999 ");
            props.addToCart(inputText)
          }
        >
          加入購物車
        </button>
      </div>
    </div>
  );
};

export default AddToBasket;
