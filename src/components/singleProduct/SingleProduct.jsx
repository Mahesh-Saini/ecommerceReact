import { Link } from "react-router-dom";
import "./SingleProduct.scss";

const SingleProduct = ({ pItem }) => {
  return (
    <div className="productContainer">
      <img className="productImage" src={pItem?.images[0].imgUrl} />
      <div className="productDetails">
        <div className="priceBox">
          <span>{pItem.sellingPrice}/-</span>
          <span className="cuttingPrice">{pItem.actualPrice}/-</span>
        </div>

        <div className="titleBox">
          <p>{pItem.title}</p>
        </div>
        <div className="buttonBox">
          <Link to={`/products/${pItem._id}`} className="moreDetails">
            More Details...
          </Link>
          <button className="addToCart">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
