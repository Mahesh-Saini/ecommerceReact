import { useState } from "react";
import "./ProductImages.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const ProductImages = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleLeftButton = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };
  const handleRightButton = () => {
    if (currentIndex < data.images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  const handleImageClick = (id) => {
    setCurrentIndex(id);
  };

  return (
    <div className="productImages">
      <div className="imgBox">
        <img src={`${data.images && data.images[currentIndex].imgUrl}`} />
        {currentIndex > 0 && (
          <button className="buttonLeft" onClick={handleLeftButton}>
            <FiChevronLeft />
          </button>
        )}

        {currentIndex < data.images?.length - 1 && (
          <button className="buttonRight" onClick={handleRightButton}>
            <FiChevronRight />
          </button>
        )}
      </div>
      <div className="imagesBox">
        {data.images &&
          data.images.map((item, i) => {
            return (
              <div
                className={`imgBox ${i === currentIndex && "active"} `}
                key={item._id}
                onClick={() => handleImageClick(i)}
              >
                <img src={item.imgUrl} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductImages;
