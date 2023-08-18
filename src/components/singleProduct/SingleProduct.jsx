import "./SingleProduct.scss";

const SingleProduct = ({ pItem }) => {
  return (
    <div className="productContainer">
      <img className="productImage" src={pItem.imgUrl} />
      <div className="productDetails">
        <div className="priceBox">
          <span>{pItem.sellingPrice}/-</span>
          <span className="cuttingPrice">{pItem.cuttedPrice}/-</span>
        </div>

        <div className="titleBox">
          <p>{pItem.title}</p>
        </div>
        <div className="buttonBox">
          <button className="moreDetails">More Details...</button>
          <button className="addToCart">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
