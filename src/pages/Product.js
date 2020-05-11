import React,{useState, useEffect} from "react";
import { Modal, Pagination } from "react-bootstrap";
import { IoIosHeartEmpty } from "react-icons/io";
import axios from 'axios';

import ProductItem from "./ProductItem"
import SelectByProductType from "./SelectByProductType"
import SelectByUnitprice from "./SelectByUnitprice"
import SelectByCreatetime from "./SelectByCreatetime"

import "../css/product.css";

function Product(props) {

  const [productSorts, setProductSorts] = useState({
    ps:[{
      productSortId: 1,
      companyId: 1,
      categoryId: 1,
      faceCateId: 1,
      createTime: "2020-04-14T16:00:00.000Z",
      productSortName: "xxx",
      productDetail: "綿密乳霜質地、迷人奶油光，保濕持色長達8小時",
      productFeature: "獨家「雙向融合冷凝萃技術」，完美融合超細緻粉體與高活性保養精華，讓肌膚感受輕盈柔滑，頂級絲緞般的薄透服貼，越上妝肌膚越水越澎越亮！充滿質感的黑金瓶身，搭配全新按壓式設計，讓粉體不接觸空氣，保鮮效果更好，是彩妝品也是令人愛不釋手的精品！",
      productInstruction: "均勻塗抹唇部，使唇部呈現豐滿飽和的色澤。",
      isNew: 1
  }]
});



  useEffect(()=>{
    fetchProductSorts('http://localhost:5000/product-sorts/all');

  }, []);

  useEffect(()=>{
    console.log("productSorts 更新了")
    console.log(productSorts);

    

  }, [productSorts]);

  

  const fetchProductSorts = (url) => {

    console.log('fetch Data');

    axios.get(url)
    .then(res => {
      const jsonRst = res.data;
      // this.setState({ persons });
      console.log(jsonRst);

      setProductSorts({ps:jsonRst});
    })
    .catch(err=>{
      console.log(err);
      
    })

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
  }

  return (
    <>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 buttonDiv">
          <div className="select_wrap">
            <div className="label_center">
              <label className="label_form mr-4">篩選條件：</label>
            </div>
            <SelectByProductType/>
            <SelectByUnitprice/>
            <SelectByCreatetime/>
            
          </div>
        </div>
        <div className="col-2"></div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 p-0">
            <div className="row product_wrap">

    {productSorts.ps.map((productSort, index) => {
      return(<ProductItem
        psName={productSort.productSortName}
        cpName="YSL"
        price="1500"
      />

      )
    })}

              
            
            
            
            </div>
          </div>
          <div className="col-2"></div>
        </div>


      </div>
      {/* 分頁 */}
      <div className="row">
      <div className="col-2"></div>
        <div className="col-8 p-0">
          <Pagination style={{float:"right"}}>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
        <div className="col-2"></div>
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
