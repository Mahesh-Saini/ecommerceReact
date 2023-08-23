import "./ProductImages.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const ProductImages = ({ data }) => {
  return (
    <div className="productImages">
      <div className="imgBox">
        <img src={`${data.images && data.images[0].imgUrl}`} />
        <button className="buttonLeft">
          <FiChevronLeft />
        </button>

        <button className="buttonRight">
          <FiChevronRight />
        </button>
      </div>
      <div className="imagesBox">
        <div className="imgBox">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fphoto_camera%2Fphoto_camera_PNG7846.png&f=1&nofb=1&ipt=fd27ff8211732a1d9d21a72ab953f508411e81284c47d22fc9271b406fa71fec&ipo=images"
            alt="camera"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
