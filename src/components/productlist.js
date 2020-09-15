import React from 'react';
import Image from './image';

const Products = ({products, title}) => {
    return (
      <div className="container">
          <h1>{title}</h1>
          {products.map((product, k) => (
                      <div className="productcard" key={k}>
                          <div className="product-image"><Image  url={product.Custom.image} name={product.ItemName} size="100" /></div>
                          <div className="product-info">
                              <div className="product-name"><strong>{product.ItemName}</strong></div>
                              <div className="sku"> SKU: {product.SKU}</div>
                          </div>
                      </div>
                      ))}
      </div>
      );
};

export default Products;