import "./Subcategory.scss";

const Subcategory = ({ data }) => {
  return (
    <div className="subcategory">
      <span className="title">{data.title}</span>
      <ul className="items">
        {data.items.map((i, index) => {
          return (
            <li className="item" key={index}>
              {i}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Subcategory;
