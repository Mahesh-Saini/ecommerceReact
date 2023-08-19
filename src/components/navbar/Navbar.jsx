import Logo from "../logo/Logo";
import "./Navbar.scss";
import SearchBox from "../searchBox/SearchBox";
import NavbarOptions from "../navbarOptions/NavbarOptions";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="wrapper">
        <div className="left">
          <Logo textTitle="Wolfers" textColor="#ffd900" imgUrl="/wolfers.svg" />
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
