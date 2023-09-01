import { Link } from "react-router-dom";
import "./SingleProduct.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice.js";

const SingleProduct = ({ pItem }) => {
  const cartItems = useSelector((state) => state.carts.carts);

  const dispatch = useDispatch();
  const handleClick = (pItem) => {
    dispatch(addToCart(pItem));
  };

  return (
    <div className="productContainer">
      <img className="productImage" src={pItem?.images[0].imgUrl} />
      <div className="productDetails">
        <div className="priceBox">
          <span>{pItem.sellingPrice}/-</span>
          <span className="cuttingPrice">{pItem.actualPrice}/-</span>
        </div>

        <div className="titleBox">
          <p>
            {pItem.title.length > 40
              ? pItem.title.slice(0, 40) + "..."
              : pItem.title}
          </p>
        </div>
        <div className="buttonBox">
          <Link to={`/products/${pItem._id}`} className="moreDetails">
            More...
          </Link>
          <button className="addToCart" onClick={() => handleClick(pItem)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
