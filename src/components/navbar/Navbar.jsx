import { FiSettings, FiShoppingCart, FiSearch } from "react-icons/fi";
import "./Navbar.css";
import Logo from "../logo/Logo";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <nav className="header_navbar">
          <div className="header_navbarLeft">
            <Logo textTitle="Wolfers" textColor="#ffd900" />
            {/* <div className="logoBox">
              <img src="vite.svg" alt="website logo" />
            </div>
            <span className="logoName">Wolfers</span> */}
          </div>
          <div className="header_navbarCenter">
            <div className="searchBox">
              <input type="search" placeholder="search" />
              <button>
                <FiSearch />
              </button>
            </div>
          </div>
          <div className="header_navbarRight">
            <ul className="header_navbarRight_options">
              <li className="header_navbarRight_optionsItem">
                <FiShoppingCart />
                <div className="cartCount">1</div>
              </li>
              <li className="header_navbarRight_optionsItem">
                <FiSettings />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
