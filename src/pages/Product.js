import React from 'react'

function Product() {
  return <></>
}

export default Product

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
