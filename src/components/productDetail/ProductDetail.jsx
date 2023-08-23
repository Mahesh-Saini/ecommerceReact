import "./ProductDetail.scss";
const ProductDetail = ({ data }) => {
  return (
    <div className="productDetail">
      <div className="titleBox">
        <h3>{data.title}</h3>
      </div>
      <div className="priceBox">
        <h1>{data.sellingPrice}/-</h1>
        <h6>{data.actualPrice}/-</h6>
      </div>
      <div className="descriptionBox">
        <p>{data.description}</p>
      </div>
      <div className="buttonsBox">
        <button>Add to cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetail;
