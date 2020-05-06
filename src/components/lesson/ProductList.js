import React from 'react';

const renderProductColumn = (product) => (
  <div className="product text-center" key={product.id}>
    <div className="product__image">
      <img className="w-100" src={product.image} alt={product.brand} />
    </div>
    <div className="product__brand">
      {product.brand}
    </div>
    <div className="product__name--en">
      {product.nameEn}
    </div>
    <div className="product__name--zh">
      {product.nameZh}
    </div>
    <a href="#" title={product.button}>
      <div className="product__detail-button">
        {product.button}
      </div>
    </a>          
  </div>
);

const ProductList = (props) => {
  const { list } = props;

  return (
    <div className="product-wrapper">
      {
        (list || []).map((product) => (
          renderProductColumn(product)
        ))
      }
    </div>
  );
};

export default ProductList;
