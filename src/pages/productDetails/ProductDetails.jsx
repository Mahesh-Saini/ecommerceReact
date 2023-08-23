import { useEffect, useState } from "react";
import ProductDetail from "../../components/productDetail/ProductDetail";
import ProductImages from "../../components/productImages/ProductImages";
import "./ProductDetails.scss";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:3000/api/v1/product/${id}`);
        const data = await res.json();
        setSingleProduct(data.product);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleProduct();
  }, []);

  return (
    <div className="productDetails">
      <div className="productDetailsLeft">
        <ProductImages data={singleProduct} />
      </div>
      <div className="productDetailsRight">
        <ProductDetail data={singleProduct} />
      </div>
    </div>
  );
};

export default ProductDetails;
