import React, { useState, useEffect } from "react";
import { Modal, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import "../css/order-checkout.css";
import axios from "axios";

function Checkout(props) {
  // 付款人相關資訊
  const draweeData = {
    memberName: "",
    memberCellPhone: "",
    memberPhone: "",
    memberAddress: "",
    consigneeName: "",
    consigneeCellphone: "",
    consigneePhone: "",
    consigneeAddress: "",
  };

  // 要送出的 order表單
  const orderData = {
    order: {
      orderId: 1,
      couponCode: "aaaaa",
      consigneeId: 2,
      receiptId: 1,
      decoration: 0,
      orderState: 0,
    },
  };

  // ================================ 連線抓取 ID資料 =======================================

  useEffect(() => {
    fetchOrder("http://localhost:5000/user/1/order/?state=2");
  }, []);

  let unpaidOrderId = 0;
  const fetchOrder = (url) => {
    console.log("fetch Data");
    axios
      .get(url)
      .then((res) => {
        const jsonRst = res.data;
        unpaidOrderId = jsonRst[0].unpaidOrderId;
        // this.setState({ persons });
        console.log(
          "Order item ----------------------------------  " + unpaidOrderId
        );

        // this.setState({ order: jsonRst });

        // console.log(this.orderData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const url = "http://localhost:5000/order/";

  const sendOrder = (url) => {
    console.log("put Data --------------------------------  ");

    axios
      .put(url, orderData)
      .then((res) => {
        const jsonRst = res.data;
        // this.setState({ persons });
        console.log(
          "Order item ----------------------------------  " +
            JSON.stringify(jsonRst)
        );

        // this.setState({ cartItems: jsonRst });

        // console.log(this.orderData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ================================ 地址 - 連接字串 =======================================

  let m_Address1, m_Address2, m_Address3;
  let c_Address1, c_Address2, c_Address3;

  const addressConcat = (address1, address2, address3) => {
    let totalAddress = address1 + address2 + address3;
    return totalAddress;
  };

  const setMemberAddress = (address1, address2, address3) => {
    const address = addressConcat(address1, address2, address3);
    draweeData.memberAddress = address;
  };

  const setConsigneeAddress = (address1, address2, address3) => {
    const address = addressConcat(address1, address2, address3);
    draweeData.consigneeAddress = address;
  };

  const setAllData = () => {
    setMemberAddress(m_Address1, m_Address2, m_Address3);
    setConsigneeAddress(c_Address1, c_Address2, c_Address3);
    orderData.order.orderId = unpaidOrderId;

    let orderurl = url + unpaidOrderId;
    console.log(orderurl);
    sendOrder(orderurl);

    console.log(draweeData);
  };

  // ================================ 收貨人的狀態設定 =======================================
  // const [consigneeData, setConsigneeData] = useState({
  //   consigneeName: "",
  //   consigneeCellphone: "",
  //   consigneePhone: "",
  //   consigneeAddress: "",
  // });

  // useEffect(() => {
  //   console.log(consigneeData);
  // }, [consigneeData]);

  // ================================ 地址設定 =======================================

  // const [consigneeAddressConcat, setConsigneeAddressConcat] = useState({
  //   selectOne: "",
  //   selectTwo: "",
  //   text: "",
  // });

  // =========================================================================================
  return (
    <>
      <form>
        {/* 背景顏色區塊 */}
        <div className="main bg-pink">
          {/* <!-- 主要內容區塊 --> */}
          <div>
            <div className="row">
              <div className="col-1 p-0"></div>
              <div className="col-8 p-0">
                <div className="context-full m-0">
                  <div className="context-full-before"></div>
                  <div className="context-full-mid">
                    <div className="main-title-before"></div>
                    <div className="main-title">
                      <h2>CheckOut</h2>
                      <h4>結帳</h4>
                    </div>
                    <div className="main-title-after margin_bottom"></div>

                    <div className="">
                      <div className="row">
                        <div className="col-5 p-0">
                          <button
                            className="btn-pink button_set"
                            onClick={() => {
                              props.history.goBack();
                            }}
                          >
                            回前頁
                          </button>
                        </div>
                        <div className="col-2 main-title">
                          <h4>付款資訊</h4>
                        </div>
                      </div>
                      <div className="col-5"></div>
                    </div>
                    <hr className="hr-gold"></hr>
                    <div className=""></div>

                    <div className="table-bg margin_bottom">
                      <table className="table table-hover">
                        <tbody>
                          <tr>
                            <td>姓名</td>
                            <td>
                              <input
                                type="text"
                                className="form-control input-text"
                                onChange={(event) => {
                                  draweeData.memberName = event.target.value;
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>手機</td>
                            <td>
                              <input
                                type="text"
                                className="form-control input-text"
                                onChange={(event) => {
                                  draweeData.memberCellPhone =
                                    event.target.value;
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>市話</td>
                            <td>
                              <input
                                type="text"
                                className="form-control input-text"
                                onChange={(event) => {
                                  draweeData.memberPhone = event.target.value;
                                }}
                              />
                            </td>
                          </tr>
                          <div></div>
                          <tr>
                            <td>地址</td>
                            <td>
                              <div className="row">
                                <div className="col-6 td_flex p-0">
                                  <label className="label_form m-0">縣市</label>
                                  <div className="select_block_county">
                                    <select
                                      className="form-control select_block_county"
                                      onChange={(event) =>
                                        (m_Address1 = event.target.value)
                                      }
                                    >
                                      <option>台中市</option>
                                      <option>台北市</option>
                                      <option>高雄市</option>
                                      <option>屏東縣</option>
                                      <option>彰化縣</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-6 td_flex p-0">
                                  <label className="label_form m-0">鄉鎮</label>
                                  <div className="select_block_county">
                                    <select
                                      className="form-control col-form-label select_block_county"
                                      onChange={(event) =>
                                        (m_Address2 = event.target.value)
                                      }
                                    >
                                      <option>湖口鄉</option>
                                      <option>大湖鄉</option>
                                      <option>芬園鄉</option>
                                      <option>瑞穗鄉</option>
                                      <option>名間鄉</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <input
                                type="text"
                                className="form-control input-text"
                                onChange={(event) =>
                                  (m_Address3 = event.target.value)
                                }
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>信用卡號</td>
                            <td>
                              <div className="row">
                                <div className="col-6 td_flex p-0">
                                  <label className="label_form m-0">卡號</label>
                                  <div className="select_block_number">
                                    <select className="form-control col-form-label">
                                      <option>378148414762840</option>
                                      <option>363891861330408</option>
                                      <option>355897841035975</option>
                                      <option>377413051338903</option>
                                      <option>340302116900035</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-6 td_flex p-0">
                                  <div className="row">
                                    <div className="col-3 td_flex p-0">
                                      <label className="label_form m-0">
                                        檢查碼
                                      </label>
                                    </div>
                                    <div className="col-9 td_flex p-0">
                                      <input
                                        type="text"
                                        className="form-control htmlForm_input"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div style={{ height: 50 + "px" }}></div>
                    <div className="main-title">
                      <h4>發票選項</h4>
                    </div>

                    <hr className="hr-gold"></hr>

                    <div className="div_center margin_bottom">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label className="form-check-label" for="inlineRadio1">
                          個人電子發票
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label className="form-check-label" for="inlineRadio2">
                          捐贈發票
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio3"
                          value="option3"
                        />
                        <label className="form-check-label" for="inlineRadio3">
                          公司電子發票
                        </label>
                      </div>
                    </div>

                    <div className="main-title margin_top">
                      <h4>收貨地址</h4>
                    </div>

                    <hr className="hr-gold"></hr>

                    <div className="div_center margin_bottom">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label className="form-check-label" for="inlineRadio1">
                          同付款地址
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label className="form-check-label" for="inlineRadio2">
                          另外提供新的地址
                        </label>
                      </div>
                    </div>

                    <div className="table-bg margin_bottom">
                      <table className="table table-hover">
                        <tbody>
                          <tr>
                            <td>姓名</td>
                            <td>
                              <input
                                type="text"
                                className="form-control input-text"
                                onChange={(event) =>
                                  (draweeData.consigneeName =
                                    event.target.value)
                                }
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>手機</td>
                            <td>
                              <input
                                type="text"
                                className="form-control input-text"
                                onChange={(event) =>
                                  (draweeData.consigneeCellphone =
                                    event.target.value)
                                }
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>市話</td>
                            <td>
                              <input
                                type="text"
                                className="form-control input-text"
                                onChange={(event) =>
                                  (draweeData.consigneePhone =
                                    event.target.value)
                                }
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>地址</td>
                            <td>
                              <div className="row">
                                <div className="col-6 td_flex p-0">
                                  <label className="label_form m-0">縣市</label>
                                  <div className="select_block_county">
                                    <select
                                      className="form-control select_block_county"
                                      onChange={(event) =>
                                        (c_Address1 = event.target.value)
                                      }
                                    >
                                      <option>台中市</option>
                                      <option>台北市</option>
                                      <option>高雄市</option>
                                      <option>屏東縣</option>
                                      <option>彰化縣</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-6 td_flex p-0">
                                  <label className="label_form m-0">鄉鎮</label>
                                  <div className="select_block_county">
                                    <select
                                      className="form-control col-form-label select_block_county"
                                      onChange={(event) =>
                                        (c_Address2 = event.target.value)
                                      }
                                    >
                                      <option>湖口鄉</option>
                                      <option>大湖鄉</option>
                                      <option>芬園鄉</option>
                                      <option>瑞穗鄉</option>
                                      <option>名間鄉</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>
                              <input
                                type="text"
                                className="form-control input-text"
                                onChange={(event) =>
                                  (c_Address3 = event.target.value)
                                }
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* <div className="form-check" style="text-align: center; background-color: hotpink;"> */}
                    <div style={{ height: 50 + "px" }}></div>
                    <div className="form-check div_center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck1"
                      >
                        本訂單是一份禮物
                      </label>
                    </div>
                    {/*  */}
                    <div className="form-check div_center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck1"
                      >
                        我已閱讀並同意電子商務條款
                      </label>
                    </div>
                    {/* <div className="" style="text-align: center;"> */}
                    <div className="div_center">
                      <button
                        type="button"
                        className="btn-green"
                        onClick={() => setAllData()}
                      >
                        確定送出
                      </button>
                    </div>
                  </div>
                  <div className="context-full-after"></div>
                </div>
              </div>

              {/* 下面開始是右半部 */}
              <div className="col-2 gird_main_left">
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
          </div>
        </div>
      </form>
    </>
  );
}

export default Checkout;
