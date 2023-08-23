import { Link } from "react-router-dom";
import "./Subcategory.scss";

const Subcategory = ({ data, activeItem }) => {
  return (
    <div className="subcategory">
      <span className="title">{data.title}</span>
      <ul className="items">
        {data.items.map((i, index) => {
          return (
            <Link to={`/products?${data.title}`} className="item" key={index}>
              {i}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Subcategory;
