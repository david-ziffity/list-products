import React from 'react';

const ProductPlaceholder = ({count}) => {

    let cardshimmer = [];

    for (var i = 1; i <= count; i++) {

        cardshimmer.push(<div className="productcard" key={i}>
            <div className="product-image shimmer"></div>
            <div className="product-info">
                <div className="product-name shimmer"></div>
                <div className="sku shimmer"></div>
            </div>
        </div>)

    }

    return (
      <div className="container">
          <h1 className="page-title shimmer"></h1>
          {cardshimmer}
      </div>
      );

};

export default ProductPlaceholder;
