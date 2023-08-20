import ProductDetail from "../../components/productDetail.jsx/ProductDetail";
import ProductImages from "../../components/productImages/ProductImages";
import "./ProductDetails.scss";

const ProductDetails = () => {
  return (
    <div className="productDetails">
      <div className="productDetailsLeft">
        <ProductImages />
      </div>
      <div className="productDetailsRight">
        <ProductDetail />
      </div>
    </div>
  );
};

export default ProductDetails;
