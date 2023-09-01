import Logo from "../logo/Logo";
import "./Navbar.scss";
import SearchBox from "../searchBox/SearchBox";
import NavbarOptions from "../navbarOptions/NavbarOptions";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [toggleCart, setToggleCart] = useState(false);
  const [toggleSettings, setToggleSettings] = useState(false);
  const handleToggleCart = () => {
    setToggleCart((prev) => !prev);
  };
  const handleToggleSettings = () => {
    setToggleSettings((prev) => !prev);
  };
  return (
    <div className="navbar">
      <nav className="wrapper">
        <div className="left">
          <Link to={"/"}>
            <Logo
              textTitle="Wolfers"
              textColor="#ffd900"
              imgUrl="/wolfers.svg"
            />
          </Link>
        </div>
        <div className="center">
          <SearchBox />
        </div>
        <div className="right">
          <NavbarOptions
            toggleCart={toggleCart}
            handleToggleCart={handleToggleCart}
            toggleSettings={toggleSettings}
            handleToggleSettings={handleToggleSettings}
          />
          <Link to={"/login"}>sign in</Link>
          <Link to="/register">register</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
