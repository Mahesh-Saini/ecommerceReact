import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SingleProduct from "../../components/singleProduct/SingleProduct";
import Filters from "../../components/filters/Filters";
import "./Products.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../redux/product/productSlice.js";

const Products = () => {
  const allProducts = useSelector((state) => state.allProduct.allProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div className="productsShowSection">
      <div className="productsShowSection_left">
        <Filters />
      </div>
      <div className="productsShowSection_right">
        {allProducts &&
          allProducts.map((pItem) => {
            return <SingleProduct pItem={pItem} key={pItem._id} />;
          })}
      </div>
    </div>
  );
};

export default Products;
