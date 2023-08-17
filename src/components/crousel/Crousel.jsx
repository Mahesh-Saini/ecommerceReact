import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Crousel.css";

const data = [
  {
    id: 1,
    title: "summer sale",
    imgUrl: "",
    color: "red",
  },
  {
    id: 2,
    title: "winter sale",
    imgUrl: "",
    color: "green",
  },
  {
    id: 3,
    title: "special coupons",
    imgUrl: "",
    color: "yellow",
  },
  {
    id: 4,
    title: "discount offer",
    imgUrl: "",
    color: "blue",
  },
  {
    id: 5,
    title: "black friday sale",
    imgUrl: "",
    color: "skyblue",
  },
];

const Crousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlide = data.length;
  const [autoPlay, setAutoPlay] = useState(true);

  const handleLeftButton = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };
  const handleRightButton = () => {
    if (currentSlide < totalSlide - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="crousel">
      <div className="leftButton" onClick={() => handleLeftButton()}>
        <FiChevronLeft />
      </div>
      <div
        className="crouselWrapper"
        style={{
          transform: `translateX(-${100 * currentSlide}%)`,
          color: `green`,
        }}
      >
        {data.map((slide) => {
          return (
            <div
              key={slide.id}
              className="slide"
              style={{ backgroundColor: `${slide.color}`, color: "white" }}
            >
              {slide.title}
              {/* <img
            src={slide.imgUrl}
            alt={slide.title}
            className="slideImg"
          /> */}
            </div>
          );
        })}
      </div>
      <div className="rightButton" onClick={() => handleRightButton()}>
        <FiChevronRight />
      </div>
      <div className="dots">
        {data.map((slide, i) => {
          return (
            <div
              className={`dot ${i === currentSlide && "activeDot"}`}
              key={slide.id}
              onClick={() => handleDotClick(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Crousel;
