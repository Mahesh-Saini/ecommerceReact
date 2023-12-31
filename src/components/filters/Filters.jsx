import "./Filters.scss";
import Categories from "../categories/Categories";

const Filters = ({ handleMin, handleMax }) => {
  return (
    <div className="filters">
      <div className="categoriesFilter">
        <Categories />
      </div>
      <div className="priceFilter">
        <h3>Filter price</h3>
        <div className="priceRangeBox">
          <div className="min">
            <label htmlFor="min">min</label>
            <input
              name="min"
              type="range"
              min={0}
              max={10000}
              onChange={handleMin}
            />
          </div>
          <div className="max">
            <label htmlFor="max">max</label>
            <input
              name="max"
              type="range"
              min={0}
              max={10000}
              onChange={handleMax}
            />
          </div>
        </div>
      </div>
      <div className="sort">
        <h3>Sort</h3>
        <div className="sortWrapper">
          <div className="checkboxWrapper">
            <input type="checkbox" name="sortByPrice" />
            <label htmlFor="sortByPrice">Asending Price</label>
          </div>
          <div className="checkboxWrapper">
            <input type="checkbox" />
            <label htmlFor="sortByPrice">Desending Price</label>
          </div>
          <div className="checkboxWrapper">
            <input type="checkbox" />
            <label htmlFor="sortByPrice">Alphabetical a-z</label>
          </div>
          <div className="checkboxWrapper">
            <input type="checkbox" />
            <label htmlFor="sortByPrice">Alphabetical z-a</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
