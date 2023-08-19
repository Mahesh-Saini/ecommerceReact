import { FiSearch } from "react-icons/fi";
import "./SearchBox.scss";

const SearchBox = () => {
  return (
    <div className="searchBox">
      <input type="search" placeholder="search" />
      <button>
        <FiSearch />
      </button>
    </div>
  );
};

export default SearchBox;
