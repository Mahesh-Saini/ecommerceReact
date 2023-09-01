import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";

import Hero from "../../components/hero/Hero";
import ProductSlide from "../../components/productSlide/ProductSlide";
import "./Home.scss";
import { fetchTopSellingProducts } from "../../redux/product/topSellingProductSlice.js";
import { fetchRecommendedProducts } from "../../redux/product/recomemdedProductSlice.js";
import Loading from "../../components/loading/Loading";

const Home = () => {
  const topSellingProducts = useSelector(
    (state) => state.topSellingProduct.topSellingProducts
  );
  const recommendedProducts = useSelector(
    (state) => state.recommendedProduct.recommendedProducts
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopSellingProducts());
    dispatch(fetchRecommendedProducts());
  }, []);

  return (
    <>
      <Helmet>
        <title>Wolfers - ecommerce application</title>
      </Helmet>
      <Hero />

      {topSellingProducts && (
        <ProductSlide
          productTitle="Top seller of the month"
          data={topSellingProducts}
        />
      )}

      {recommendedProducts && (
        <ProductSlide
          productTitle="Top seller of the month"
          data={recommendedProducts}
        />
      )}
    </>
  );
};

export default Home;
