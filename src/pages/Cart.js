import React, { Component } from "react";
import { Modal, Row, Col, ListGroup, Accordion, Card } from "react-bootstrap";
import { withRouter } from 'react-router-dom'
import axios from "axios";

import "../css/order-cart.css";
import CartItem from "./CartItem";
import CartItemHead from "./CartItemHead";
import CartDetail from "./CartDetail";


class Cart extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    cartItems: [
     
    ]
    
  };

  // 訂單的相關資料
  orderData = {
    order:{
      orderId:999,
      memberId:1,
      orderDate:20190101164823,
      originalTotal:1500,
      originalDiscount:200,
      orderTotal:1300,
      couponCode:"vip001",
      orderState:2
      
    },
    orderDetail:[
      {
        orderId:999,
        productId:1,
        orderData:20190101164823,
        originalProductPrice:500,
        originalProductDiscount:100,
        discountPrice:400,
        quantity:2
      },
      {
        orderId:999,
        productId:2,
        orderData:20190101184823,
        originalProductPrice:1000,
        originalProductDiscount:100,
        discountPrice:900,
        quantity:1
      }
    ]
  }


  // const member = JSON.parse(localStorage.getItem('Member')) || [];
  // console.log(member.MemberID);
  // setMemberID(member.MemberID);

// 畫面載入成功
componentDidMount(){
  // 開始連線
  localStorage.clear();
  localStorage.setItem('TestMember', JSON.stringify({MemeberID: 3}));
  let membId =  JSON.parse(localStorage.getItem('TestMember')).MemeberID;
 
  let fetchUrl = "http://localhost:5000/cart/" + membId;
  console.log("77777777777777--- " +fetchUrl);
  this.fetchCart(fetchUrl)
  
}

fetchCart = (url) => {
  console.log("fetch Data");
  axios
    .get(url)
    .then((res) => {
      const jsonRst = res.data;
      // this.setState({ persons });
      console.log("cart item ------  "   + jsonRst);

      this.setState({ cartItems: jsonRst });

      // this.setState( (state, props) => {
      //  return { orderDetail:  {
      //   orderId:2000,
      //   productId:2,
      //   originalProductPrice:1000,
      //   originalProductDiscount:100,
      //   discountPrice:900,
      //   quantity:1
      // } }
      // }) 

      console.log(this.orderData);
    })
    .catch((err) => {
      console.log(err);
    });
};


// 

sendCartToOrder = () => {
  console.log("post Data +++++++++++++++++++++++++++++++++++++++++++++");

  let membId =  JSON.parse(localStorage.getItem('TestMember')).MemeberID;
  let postUrl = "http://localhost:5000/user/" + membId + "/order/";
  console.log("post url 000 --- " + postUrl);

  // let url = "http://localhost:5000/user/1/order/"


  axios
    .post(postUrl, this.orderData)
    .then((res) => {
      const jsonRst = res.data;
      // this.setState({ persons });
      console.log("cart item AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA------  "   + jsonRst);

      let url = "/Checkout/" + this.orderData.order.orderId;

      console.log(this.orderData);
      this.props.history.push(url)
    })
    .catch((err) => {
      console.log(err);
    });
};

// ==========================  購物明細頁 - 前端互動  ===========================================

  componentDidUpdate() {
    console.log("componentDidUpdate" + this.state.cartItems);
    this.getOriginalTotal()
  }

  removeItemFromCart = (itemIndex) => {
    const newCartItems = [...this.state.cartItems];
    newCartItems.splice(itemIndex, 1);
    this.setState({ cartItems: newCartItems });
    // 資料庫處理 - 刪除 Cart Table

  };

  changeItemAmount = (itemIndex, amount) => {
    console.log(
      "changeItemAmount " + parseInt(amount) + "itemIndex " + itemIndex
    );
    const newCartItems = [...this.state.cartItems];
    console.log("newCartItems = " + newCartItems);
    // newCartItems.cartItem[itemIndex].amount = amount;
    newCartItems[itemIndex].amount = amount;
    newCartItems[itemIndex].total = amount * newCartItems[itemIndex].unitPrice;

    console.log("父元件陣列：(數量) " + this.state.cartItems[0].amount);
    console.log("父元件陣列：(總和) " + this.state.cartItems[0].total);

    this.setState({ cartItems: newCartItems });
  };

  getOriginalTotal = () => {
    let total = 0;

    for (let cartItem of this.state.cartItems) {
      total += cartItem.unitPrice * cartItem.amount;
    }
    console.log("total = " + total)
    return total;
  };

  getDiscountTotal = () => {
    return 450;
  };

  render() {
    return (
      <>
        <form>
          <div className="main">
            <div className="bg-pink">
              <div className="row">
                <div className="col p-0"></div>

                <div className="col-8 no_padding">
                  {/* 左邊的主要區塊，gird用來設定padding */}
                  <div className="context-full m-0">
                    <div className="context-full-before"></div>
                    <div className="context-full-mid">
                      {/* 大標題 */}
                      <div className="main-title-before"></div>
                      <div className="main-title">
                        <h2>My Basket</h2>
                        <h4>購物袋</h4>
                      </div>
                      <div className="main-title-after"></div>

                      <div className="">
                        <div className="row">
                          <div className="col-5">
                            <button className="btn-pink ml-0">回前頁</button>
                          </div>

                          <div className="main-title-before"></div>
                          <div className="main-title">
                            <h2>Items in basket(2)</h2>
                            <h4>購物項目</h4>
                          </div>
                          <div className="main-title-after"></div>
                        </div>
                        <div className="col-5"></div>
                      </div>
                      <div>
                        <CartItemHead />
                        {this.state.cartItems.map((cartItem, index) => {
                          return (
                            <CartItem
                              memberId={cartItem.memberId}
                              productName={cartItem.productName}
                              companyName={cartItem.companyName}
                              unitPrice={cartItem.unitPrice}
                              amount={cartItem.amount}
                              total={ cartItem.amount * cartItem.unitPrice}
                              deleteBtnClicked={() =>
                                this.removeItemFromCart(index)
                              }
                              changeInputNumber={() => this.changeItemAmount}
                              itemIndex={index}
                            />
                          );
                        })}
                      </div>
                    </div>
                    <div className="context-full-after"></div>
                  </div>
                </div>
                <div className="col-2 ">
                  <div className="main_right">
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          活動代碼
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <input
                              type="text"
                              className="form-control input-text"
                            />
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          訂單摘要
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                          聯絡我們
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            若您需要協助，請聯絡客服0800-66-88-00，週一至週五(例假日除外)09:30-12:30,
                            14:00-17:30
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                          常見問題
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                          <Card.Body>
                            <a href="#">
                              配送與運費
                              <br />
                            </a>
                            <a href="#">
                              退換貨服務
                              <br />
                            </a>
                            <a href="#">
                              限購政策
                              <br />
                            </a>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
                <div className="col-1 p-0"></div>
              </div>

              <div className="row">
                <div className="col-1 p-0"></div>

                <div className="col-10 gird_order_details">
                  <div className="context-full order_detail_wrap">
                    <div className="context-full-before"></div>
                    <div className="context-full-mid">
                      <CartDetail
                        originalTotal={this.getOriginalTotal()}
                        discountTotal={this.getDiscountTotal()}
                        sendToOrder={()=>this.sendCartToOrder()}
                      />
                    </div>
                    <div className="context-full-after"></div>
                  </div>
                </div>
                <div className="col p-0"></div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(Cart);
