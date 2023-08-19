import "./Category.scss";

const Category = ({
  categories,
  activeItem,
  currentPage,
  possiblePages,
  handlePrevButton,
  handleNextButton,
  getSubcategoriesData,
}) => {
  return (
    <div className="category">
      <ul className="categoryItems">
        {categories.map((item) => {
          return (
            <li
              className={`categoryItem ${
                activeItem === item.title ? "itemActive" : ""
              }`}
              key={item.id}
              onClick={() => getSubcategoriesData(categories, item.title)}
            >
              {item.title}
            </li>
          );
        })}

        {currentPage > 1 && (
          <button className="prevButton" onClick={handlePrevButton}>
            Prev
          </button>
        )}
        {currentPage < possiblePages && (
          <button className="nextButton" onClick={handleNextButton}>
            Next
          </button>
        )}
      </ul>
    </div>
  );
};

export default Category;
