import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Crousel.scss";

const data = [
  {
    id: 1,
    title: "summer sale",
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.akunatech.com%2Fblog%2Fwp-content%2Fuploads%2F2018%2F05%2Fecommerce-services.jpg&f=1&nofb=1&ipt=1b7542d008e1cd9a8fa5655c4c69d542fbcbc2b45eea793bb39884a1c14bbeb1&ipo=images",
    color: "red",
  },
  {
    id: 2,
    title: "winter sale",
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jdmedia.co.za%2Fimages%2Fcarousel%2FEcommerce-Banner-1920.jpg&f=1&nofb=1&ipt=ccfc531256a703147cddba834b57fd69ef46c919320499b4171a0b562ee7fc1a&ipo=images",
    color: "green",
  },
  {
    id: 3,
    title: "special coupons",
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F9a%2F13%2Fdc%2F9a13dc79ca4368d6c87acb2e52cadf9d.jpg&f=1&nofb=1&ipt=3418bf8b3dad4064e4e3390d088fc87d0ad82e414fb31ac036aa9ebf74acc347&ipo=images",
    color: "yellow",
  },
  {
    id: 4,
    title: "discount offer",
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.infowiz.co.in%2Fwp-content%2Fuploads%2F2019%2F12%2Fecommerce-banner.png&f=1&nofb=1&ipt=3569dd4157e2243e18d73d80eb83a69a177f73c493ff5c1dd41a96752d3a0769&ipo=images",
    color: "blue",
  },
  {
    id: 5,
    title: "black friday sale",
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Findglobal.in%2Fwp-content%2Fuploads%2F2015%2F10%2FE-commerce-banner.jpg&f=1&nofb=1&ipt=10f717d844c3b05e7aabb5b23ca2e6a0fc2c424bec6060157507a0fd99a57ff1&ipo=images",
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
      <div className="crouselLeftButton" onClick={() => handleLeftButton()}>
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
            <div key={slide.id} className="slide">
              <img src={slide.imgUrl} alt={slide.title} className="slideImg" />
            </div>
          );
        })}
      </div>
      <div className="crouselRightButton" onClick={() => handleRightButton()}>
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
