import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'

import '../styles/discount.scss'
import bgimg from '../images/discount/bg.png'
import img1 from '../images/product/p001.png'






function Product(props) {
  //設勾子
  const [productText, setProductText] = useState([])//所有商品


  //--------------------------------------------------------------------------------//
  // 物件值 - 解構賦值 ; 得到的參數一定字串類型 ; 路由值: pid:品牌、cid:類別、page:頁數


  //連線node資料庫資料
  function getTotalFromServer() {
    let url = 'http://localhost:5000/productlist';
    //使用 fetch 透過網路取得 json 然後印出在 console，最簡單的方式只需要一個參數就是資料的 URI，fetch 會回傳一個包含 response 的 promise 。

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {

        //所有資料
        setProductText(myJson);
        console.log(myJson);
      })
  }
  //一開始就會載入資料
  useEffect(() => {
    getTotalFromServer()
    //const newProductText = localStorage.getItem('product') || [] //前面設一個變數代表清單，後面拿出product清單內容
    //setProductText = setProductText(JSON.parse(newProductText)) //把變數轉成json檔，然後傳到setProductText裡
  }, [])
  //--------------------------------------------------------------------------------//



  //--------------------------------------------------------------------------------//

  return (
    <>
      <div id="app">
        <div className="productBody container">

          <main id="mainpro">
            <div className="productContent">
              <div className="container">
                <div className="card-deck">
                  <Row >
                    {productText.map((value, index) => {
                      //console.log(result);
                      return (
                        <Col xs={12} md={4} >
                          <div className="card" key={index}>
                            <img
                              src={require(`../images/product/${value.productImg}.png`)}
                              className="card-img-top pdimg"
                              alt="..."
                            />
                            <img
                              src={bgimg}
                              className="card-img-top bgimg"
                              alt="..."
                            />
                            <div className="card-body">

                              <h4 className="card-text">{value.productName}</h4>
                              <h5 className="card-text">{value.color}</h5>
                              <p classame="card-text">NT {value.unitPrice}</p>
                              <button className="btn-white" >加入購物車</button>

                            </div>

                          </div>
                        </Col>
                      )
                    })}
                  </Row>
                </div>
              </div>
            </div>


          </main>
        </div>
      </div>
    </>
  )
}

export default Product
