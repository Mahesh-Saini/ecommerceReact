import { useEffect, useState } from "react";
import {
  useLocation,
  useMatch,
  useMatches,
  useParams,
  useSearchParams,
} from "react-router-dom";

import SingleProduct from "../../components/singleProduct/SingleProduct";
import Filters from "../../components/filters/Filters";
import "./Products.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../redux/product/productSlice.js";
import DataNotFound from "../../components/dataNotFound/DataNotFound";

const Products = () => {
  const query = new URLSearchParams(useLocation().search);
  const category = query.get("category");
  const subcategory = query.get("subcategory");
  const item = query.get("item");
  const search = query.get("search");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(20);

  const allProducts = useSelector((state) => state.allProduct.allProducts);
  const totalCount = useSelector((state) => state.allProduct.totalCount);
  const totalpages = Math.ceil(totalCount / pageLimit);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchAllProducts([
        category,
        subcategory,
        item,
        search,
        min,
        max,
        currentPage,
        pageLimit,
      ])
    );
  }, [category, subcategory, item, search, min, max, currentPage, pageLimit]);

  const handleMin = (e) => {
    setMin(e.target.value);
  };
  const handleMax = (e) => {
    setMax(e.target.value);
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (totalpages > currentPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handleCircleBtn = (val) => {
    // setCurrentPage(val);
  };
  return (
    <div className="productsShowSection">
      <div className="productsShowSection_left">
        <Filters handleMin={handleMin} handleMax={handleMax} />
      </div>
      <div className="productsShowSection_right">
        <div className="productList">
          {allProducts && allProducts.length > 0 ? (
            allProducts.map((pItem) => {
              return <SingleProduct pItem={pItem} key={pItem._id} />;
            })
          ) : (
            <DataNotFound />
          )}
        </div>
        <div className="paginationBox">
          {totalpages <= 8 && (
            <>
              <button onClick={handlePrev} className="normalBtn">
                prev
              </button>
              <button onClick={handleNext} className="normalBtn">
                Next
              </button>
            </>
          )}
          {totalpages > 8 && (
            <>
              <button onClick={handlePrev} className="normalBtn">
                prev
              </button>
              <button
                className="circleBtn"
                onClick={(e) => handleCircleBtn(currentPage + 1)}
              >
                {currentPage + 1}
              </button>
              <button
                className="circleBtn"
                onClick={(e) => handleCircleBtn(currentPage + 2)}
              >
                {currentPage + 2}
              </button>
              <button
                className="circleBtn"
                onClick={(e) => handleCircleBtn(currentPage + 3)}
              >
                {currentPage + 3}
              </button>
              <button
                className="circleBtn"
                onClick={(e) => handleCircleBtn(currentPage + 4)}
              >
                {currentPage + 4}
              </button>
              <button
                className="circleBtn"
                onClick={(e) => handleCircleBtn(currentPage + 5)}
              >
                {currentPage + 5}
              </button>
              <button
                className="circleBtn"
                onClick={(e) => handleCircleBtn(currentPage + 6)}
              >
                {currentPage + 6}
              </button>
              <button onClick={handleNext} className="normalBtn">
                Next
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
