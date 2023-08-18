import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./ProductSlide.css";

const ProductSlide = ({ productTitle, data }) => {
  const [productSlideIndex, setproductSlideIndex] = useState(0);
  const [viewProductInOneScreen, setViewProductInOneScreen] = useState(0);
  const totalProduct = data.length;

  useEffect(() => {
    setViewProductInOneScreen(Math.floor(window.innerWidth / 296));
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
      <div className="productContainer">
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
            style={{ transform: `translateX(${-296 * productSlideIndex}px)` }}
          >
            {data.map((pItem) => {
              return (
                <div className="product" key={pItem.id}>
                  <img className="productImage" src={pItem.imgUrl} />
                  <div className="productDetails">
                    <div className="priceBox">
                      <span>{pItem.sellingPrice}/-</span>
                      <span className="cuttingPrice">
                        {pItem.cuttedPrice}/-
                      </span>
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
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlide;
