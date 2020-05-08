import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const renderProductColumn = (product) => (
  <div className="product text-center" key={product.id}>
    <div className="product__image">
      <img className="mw-100" src={product.image} alt={product.nameEn} />
    </div>
    <div className="product__name--en">
      {product.nameEn}
    </div>
    <div className="product__name--zh">
      {product.nameZh}
    </div>
    <button className="btn-green">
      {product.button}
    </button>
  </div>
);

const ProductList = (props) => {
  const { list } = props;

  return (
    <Slider
      className="product-wrapper"
      infinite={false}
      slidesToShow={4}
      slidesToScroll={1}
      responsive={[
        {
          breakpoint: 767.98,
          settings: {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 575.98,
          settings: {
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
      ]}
    >
      {
        (list || []).map((product) => (
          renderProductColumn(product)
        ))
      }
    </Slider>
  );
};

export default ProductList;
