import Logo from "../logo/Logo";
import "./Navbar.scss";
import SearchBox from "../searchBox/SearchBox";
import NavbarOptions from "../navbarOptions/NavbarOptions";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <NavbarOptions />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
