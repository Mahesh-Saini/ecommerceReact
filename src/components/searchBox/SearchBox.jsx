import { FiSearch } from "react-icons/fi";
import "./SearchBox.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="searchBox">
      <input type="search" placeholder="search" onChange={handleChange} />
      <Link to={`/products?search=${search}`}>
        <FiSearch />
      </Link>
    </div>
  );
};

export default SearchBox;
