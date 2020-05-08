import React from 'react';

const renderProductColumn = (product) => (
  <div className="product text-center col-6 col-lg-4" key={product.id}>
    <div className="product__image">
      <img className="mw-100" src={product.image} alt={product.nameEn} />
    </div>
    <div className="product__name--en">
      {product.nameEn}
    </div>
    <div className="product__name--zh">
      {product.nameZh}
    </div>
    <div className="product__price">
      {product.price}
    </div>       
  </div>
);

const ProductList = (props) => {
  const { list } = props;

  return (
    <div className="product-wrapper row">
      {
        (list || []).map((product) => (
          renderProductColumn(product)
        ))
      }
    </div>
  );
};

export default ProductList;
