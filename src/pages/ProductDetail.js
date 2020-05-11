import React, { useState, useEffect } from "react";
import {
  Modal,
  Row,
  Col,
  Carousel,
  Accordion,
  Card,
  Container,
  Button,
} from "react-bootstrap";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import axios from "axios";

import Star from "./Star";
import AddToBasket from "./AddToBasket";
import  ProductDate  from "./ProductDate";

import "../css/product.css";
import "../css/star.scss";
import Product from "./Product";

// ============= 彈出式視窗 =======================
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal-context">
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
          <div className="sub-title">
            <p className="sub-title-eng">撰寫評論</p>
            <p className="sub-title-chs">Write a review</p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p style={{ margin: 0 }}>你的評價</p>
          </div>
          <div style={{ marginBottom: 20 + "px" }}>
            <Star />
          </div>

          <div class="form-group">
            <label htmlFor="exampleFormControlTextarea1">你的使用心得</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
            ></textarea>
          </div>

          <button className="btn-green margin-btn-left" onClick={props.onHide}>
            取消
          </button>
          <button className="btn-main margin-btn-right" onClick={props.onHide}>
            確定
          </button>
          <br></br>
        </Modal.Body>
      </div>
    </Modal>
  );
}


function ProductDetail() {
  const [modalShow, setModalShow] = useState(false);
  const [product, setProduct] = useState({
    productItems: [
      {
        productId: 15,
        productSortId: 5,
        productName: "磁力眼影",
        color: "STARS ALIGN",
        unitPrice: 1050,
        unitsInStock: 22,
        categoryName: "眼影",
        productDetail: "以華麗的閃耀星塵為主題的聖誕彩妝！",
        productFeature: "獨特的黃色基調粉末，能增添妝容明亮感，看起來自然美麗",
        productInstruction: "直接用於唇部，打造更精緻的妝容。",
        companyName: "M.A.C",
        companyUrl: "https://www.maccosmetics.com.tw",
      },
    ],
  });


  // 要送給購物車的資料
  
  const [cart, setCart] = useState( {
    cartItem:[
    {
      memberId:1,
      productId:1,
      amount:2,
    },
    {
      memberId:1,
      productId:3,
      amount:4,
    },
    {
      memberId:1,
      productId:5,
      amount:2,
    },
  ]}
  )

  // ======================================
  useEffect(() => {
    fetchProduct("http://localhost:5000/product-detail/1");
    console.log("product.productItems = " + product.productItems);
  }, []);

  // 購物車 - 資料更新
  useEffect( () => {
    console.log("購物車資料成功更新")
  }, [cart])

  // get商品資料
  const fetchProduct = (url) => {
    console.log("fetch Data");
    axios
      .get(url)
      .then((res, cart) => {
        const jsonRst = res.data;
        // this.setState({ persons });
        console.log(jsonRst);

        setProduct({ productItems: jsonRst });
      })
      .catch((err) => {
        console.log(err);
      });
  };


  // POST 商品資料 to Cart

  const sendtoProductData = (url) => {
    console.log("fetch Data");
    axios
      .post(url)
      .then((res) => {
        const jsonRst = res.data;
        // this.setState({ persons });
        console.log(jsonRst);

        setProduct({ productItems: jsonRst });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 加入購物車方法

  const addItemToCart = (cartItem) => {

    console.log("cartItem = " + cartItem );
    
    console.log("資料傳遞成功")
    // setCart(event) 
    
  }

  return (
    <>
      <div className="">
        
        <div className="bg-pink">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8 p_detail_outer">
              <div className="context-full p_detail_customOut">
                <div className="context-full-before"></div>
                <div className="context-full-mid">
                  <div className="row p_detail_wrap">
                    <div className="col-6 p_detail">
                      {/* 加入購物車 - 區域 */}
                      <AddToBasket
                        productId={product.productItems.map(
                          (item) => item.productId
                        )}
                        productName={product.productItems.productName}
                        colors={product.productItems.map((item) => item.color)}
                        companyName={product.productItems[0].companyName}
                        unitPrice={product.productItems[0].unitPrice}
                        addToCart = {addItemToCart}
                        />
                        
                        
              

                      <div style={{ height: 300 + "px" }}>
                        <ProductDate
                          productDetail = {product.productItems[0].productDetail }
                          productFeature = {product.productItems[0].productFeature }
                          productInstruction = {product.productItems[0].productInstruction }
                        />
                      </div>
                    </div>

                    <div className="col-6 p_detail">
                      <div className="">
                        <button className="m-0 p-0">最新</button>
                        <button className="m-0 p-0" style={{ float: "right" }}>
                          最愛
                        </button>
                      </div>
                      {/* 大圖輪播 */}
                      <div className="" style={{ padding: 0 }}>
                        <Carousel>
                          <Carousel.Item>
                            <div>
                              <img
                                className="img-fluid d-block w-100"
                                src="https://via.placeholder.com/250x150"
                                alt="First slide"
                              />
                            </div>
                            <Carousel.Caption></Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="img-fluid d-block w-100"
                              src="https://via.placeholder.com/250x150"
                              alt="Third slide"
                            />

                            <Carousel.Caption></Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="img-fluid d-block w-100"
                              src="https://via.placeholder.com/250x150"
                              alt="Third slide"
                            />

                            <Carousel.Caption></Carousel.Caption>
                          </Carousel.Item>
                        </Carousel>
                      </div>
                      {/* 小圖輪播 */}
                      <div className="" style={{ marginTop: 30 + "px" }}>
                        <Carousel indicators={false}>
                          <Carousel.Item>
                            <Row>
                              <Col sm={12} md={4}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/250x150"
                                  />
                                </Card>
                              </Col>
                              <Col sm={12} md={4}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/250x150"
                                  />
                                </Card>
                              </Col>
                              <Col sm={12} md={4}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/250x150"
                                  />
                                </Card>
                              </Col>
                            </Row>

                            <Carousel.Caption></Carousel.Caption>
                          </Carousel.Item>

                          <Carousel.Item>
                            <Row>
                              <Col sm={12} md={4}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/250x150"
                                  />
                                </Card>
                              </Col>
                              <Col sm={12} md={4}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/250x150"
                                  />
                                </Card>
                              </Col>
                              <Col sm={12} md={4}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/250x150"
                                  />
                                </Card>
                              </Col>
                            </Row>

                            <Carousel.Caption></Carousel.Caption>
                          </Carousel.Item>

                          <Carousel.Item>
                            <Row>
                              <Col sm={12} md={4}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/250x150"
                                  />
                                </Card>
                              </Col>
                              <Col sm={12} md={4}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/250x150"
                                  />
                                </Card>
                              </Col>
                              <Col sm={12} md={4}>
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/250x150"
                                  />
                                </Card>
                              </Col>
                            </Row>

                            <Carousel.Caption></Carousel.Caption>
                          </Carousel.Item>
                        </Carousel>
                      </div>
                      {/* 活動行銷 */}
                      <div className=""></div>
                    </div>
                  </div>
                  <hr className="hr-gold"></hr>
                  {/* 評論區塊 */}
                  <div className="">
                    {/* 投稿 */}
                    <div className="row">
                      <div className="col-6">
                        <h4 style={{ marginBottom: 5 + "px" }}>REVIVW</h4>
                        <h4>評論</h4>
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                      </div>
                      <div className="col-6">
                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                        <button
                          className="btn-pink"
                          style={{ float: "right" }}
                          onClick={() => setModalShow(true)}
                        >
                          投稿
                        </button>
                      </div>
                    </div>

                    {/* 相關評論 */}

                    <div
                      className="main-title"
                      style={{ marginBottom: 40 + "px", marginTop: 40 + "px" }}
                    >
                      <h2 style={{ marginBottom: 5 + "px" }}>OTHER COMMENTS</h2>
                      <h4>其他評論</h4>
                    </div>
                    <div
                      className="comment_height overflow-auto"
                      style={{ maxHeight: 540 + "px" }}
                    >
                      <div class="media border p-3">
                        <div
                          style={{ width: 100 + "px", paddingRight: 16 + "px" }}
                        >
                          <img
                            src="https://via.placeholder.com/250x150"
                            alt="John Doe"
                            class="img-fluid mr-3 mt-3 rounded-circle"
                          />
                        </div>
                        <div
                          class="media-body overflow-auto"
                          style={{ maxHeight: 150 + "px" }}
                        >
                          <h5>
                            John Doe{" "}
                            <small>
                              <i>Posted on February 19, 2016</i>
                            </small>
                          </h5>
                          <div class="">aaa</div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </div>
                      </div>
                      <div class="media border p-3">
                        <div
                          style={{ width: 100 + "px", paddingRight: 16 + "px" }}
                        >
                          <img
                            src="https://via.placeholder.com/250x150"
                            alt="John Doe"
                            class="img-fluid mr-3 mt-3 rounded-circle"
                          />
                        </div>
                        <div
                          class="media-body overflow-auto"
                          style={{ maxHeight: 150 + "px" }}
                        >
                          <h5>
                            John Doe{" "}
                            <small>
                              <i>Posted on February 19, 2016</i>
                            </small>
                          </h5>
                          <div class="">aaa</div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="context-full-after"></div>
              </div>
            </div>

            <div className="col-2"></div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;

// import React from 'react'
// import Banner from '../components/Banner'
// import { withRouter } from 'react-router-dom'

// function Product(props) {
//   //利用props中的location search得到搜尋字串
//   console.log(props)

//   //用document.location.search得到搜尋字串
//   console.log(document.location.search)

//   // 產生一個新的URLSearchParams實例
//   const searchParams = new URLSearchParams(props.location.search)

//   return (
//     <>
//       <Banner pagename="產品" />
//       {/* 用get來得到每個搜尋字屬的參數 */}
//       <h2>id: {searchParams.get('id')}</h2>
//       <h2>type: {searchParams.get('type')}</h2>
//     </>
//   )
// }

// export default withRouter(Product)
