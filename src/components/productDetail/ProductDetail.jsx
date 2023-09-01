import { useState } from "react";
import "./ProductDetail.scss";
import { FiStar } from "react-icons/fi";
const ProductDetail = ({ data }) => {
  const ratings = [];
  for (let i = 0; i < data.rating; i++) {
    ratings.push(1);
  }
  return (
    <div className="productDetail">
      <div className="titleBox">
        <h3>{data.title}</h3>
      </div>
      <div className="priceBox">
        <h1>Rs. {data.sellingPrice}/-</h1>
        <h6>Rs. {data.actualPrice}/-</h6>
        <h6>Hurry up item remaining {data.stock} only</h6>
        <p>Discount Rs. {data.discount}\-</p>
        <p>Discount percentage {data.discountPercentage}%</p>
      </div>
      <div className="ratings">
        {data.rating > 0 &&
          ratings.map((item, i) => {
            return (
              <div className="rating" key={i}>
                <FiStar style={{ fill: "yellow", fontSize: "24px" }} />
              </div>
            );
          })}
      </div>
      <div className="descriptionBox">
        <p>{data.category}</p>
        <p>{data.subCategory}</p>
        <p>{data.description}</p>
      </div>
      <div className="buttonsBox">
        <button>Add to cart</button>
        <button>Buy Now</button>
      </div>
      <div className="reviewsList">
        {data.numOfReviews > 0 &&
          reviews.map((item) => {
            return <div className="reviews">{item}</div>;
          })}
      </div>
    </div>
  );
};

export default ProductDetail;
