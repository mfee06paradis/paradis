import React, { useState, useEffect } from "react";
import { Modal, Pagination, Col } from "react-bootstrap";
import { IoIosHeartEmpty } from "react-icons/io";
import axios from "axios";
import { withRouter } from "react-router-dom";

import ProductItem from "./ProductItem";
import SelectByProductType from "./SelectByProductType";
import SelectByUnitprice from "./SelectByUnitprice";
import SelectByCreatetime from "./SelectByCreatetime";
import ProductPagination from "./ProductPagination";

import "../css/product.css";

function Product(props) {



  // 商品格式
  const productSorts = {
    ps: [
      {
        productSortId: 1,
        companyName: 1,
        categoryId: 1,
        faceCateId: 1,
        createTime: "2020-04-14T16:00:00.000Z",
        productSortName: "xxxxx",
        unitPrice:100,
        imageUrls: "./images/product/ps001/p001/p001_001.png"
      }
    ],
  };

  const a = {
    productSortId: 1,
    companyId: 1,
    categoryId: 1,
    faceCateId: 1,
    createTime: "2020-04-14T16:00:00.000Z",
    productSortName: "xxx",
    productDetail: "綿密乳霜質地、迷人奶油光，保濕持色長達8小時",
    productFeature:
      "獨家「雙向融合冷凝萃技術」，完美融合超細緻粉體與高活性保養精華，讓肌膚感受輕盈柔滑，頂級絲緞般的薄透服貼，越上妝肌膚越水越澎越亮！充滿質感的黑金瓶身，搭配全新按壓式設計，讓粉體不接觸空氣，保鮮效果更好，是彩妝品也是令人愛不釋手的精品！",
    productInstruction: "均勻塗抹唇部，使唇部呈現豐滿飽和的色澤。",
    isNew: 1,
    imageUrls: "./images/product/ps001/p001/p001_001.png",

  }

  const page = 6 

  for(let i = 0; i < 100 ; i++){
    productSorts.ps.push(a)
  }

  
// ==================== 自訂函數 =====================

  const goToProductDetail = () =>{

  }

// ==================== 畫面載入完畢 =====================
  useEffect(() => {
    fetchProductSorts("http://localhost:5000/product-sorts/all");
  }, []);

  useEffect(() => {
    console.log("productSorts 更新了");
    console.log(productSorts);
  }, [productSorts]);

  // ==================== 【分頁】 狀態設定 =====================

  const [currentPage, setCurrentPage] = useState(1);

  const clickPagination = (clickOfIndex) => {
    console.log("clickOfIndex = " + clickOfIndex);

    setCurrentPage(clickOfIndex);
  };

  useEffect(() => {
    console.log("分頁更新了!!!!!!!!!");
  }, [currentPage]);

  // ==================== 開始連線，撈取商品資料 =====================

  const fetchProductSorts = (url) => {
    console.log("fetch Data");

    axios
      .get(url)
      .then((res) => {
        const jsonRst = res.data;
        // this.setState({ persons });
        console.log("AAAAAAAAAAAAAA" + jsonRst);

        // setProductSorts({ ps: jsonRst });
        console.log("AAAAAAAAAAAAAA" + productSorts);
      })
      .catch((err) => {
        console.log(err);
      });

    // fetch(url)
    // .then(res => {
    //   const aaa = res.json()
    //   console.log("hhh   "+aaa);
    //   return aaa;
    // })
    // .then(data =>{
    //   console.log("~~~~"+ data);
    // })
    // .catch(err => {
    //   console.log("err++++" + err);
    // });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-12 buttonDiv">
            <div className="select_wrap">
              <div className="label_center">
                <label
                  className="label_form mr-4"
                  style={{ width: 100 + "px" }}
                >
                  篩選條件：
                </label>
              </div>
              <SelectByProductType />
              <SelectByUnitprice />
              <SelectByCreatetime />
            </div>
          </div>
          <div className="col"></div>

          <div className="container">
            <div className="row">
              <div className="col"></div>
              <div className="col-12 p-0">
                <div className="row product_wrap">
                  {productSorts.ps.map((productSort, index) => {
                    return (
                      <ProductItem
                        productSortId={productSort.productSortId}
                        productName={productSort.productName}
                        companyName={productSort.companyName}
                        unitPrice={productSort.unitPrice}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
        {/* 分頁 */}
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10 p-0">
              <div className="container">
                <div className="row">
                  <div className="col-4"></div>
                  <div className="col-4">
                    <ProductPagination
                      paginationInterval={6}
                      currentIndex={currentPage}
                      endIndex={21}
                      changePagination={clickPagination}
                    />
                  </div>
                  <div className="col-4"></div>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

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
