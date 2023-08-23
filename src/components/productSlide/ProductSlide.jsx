import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./ProductSlide.scss";
import SingleProduct from "../singleProduct/SingleProduct";

const ProductSlide = ({ productTitle, data }) => {
  const [productSlideIndex, setproductSlideIndex] = useState(0);
  const [viewProductInOneScreen, setViewProductInOneScreen] = useState(0);
  const totalProduct = data.length;

  useEffect(() => {
    setViewProductInOneScreen(Math.floor(window.innerWidth / 216));
  }, [productSlideIndex]);
  const handleLeftMove = () => {
    if (productSlideIndex > 0) {
      setproductSlideIndex((prev) => prev - 1);
    }
  };
  const handleRightMove = () => {
    if (productSlideIndex < totalProduct - viewProductInOneScreen) {
      setproductSlideIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="topProducts">
      <div className="topProductsContainer">
        <div className="topProductsHeader">
          <h2 className="topProductsTitle">{productTitle}</h2>
          <div className="moveButtonsBox">
            {productSlideIndex > 0 && (
              <button className="buttonLeft" onClick={() => handleLeftMove()}>
                <FiArrowLeft />
              </button>
            )}
            {productSlideIndex < totalProduct - viewProductInOneScreen && (
              <button className="buttonRigth" onClick={() => handleRightMove()}>
                <FiArrowRight />
              </button>
            )}
          </div>
        </div>
        <div className="productWrapper">
          <div
            className="productSlide"
            style={{ transform: `translateX(${-216 * productSlideIndex}px)` }}
          >
            {data.map((pItem) => {
              return <SingleProduct pItem={pItem} key={pItem._id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlide;
