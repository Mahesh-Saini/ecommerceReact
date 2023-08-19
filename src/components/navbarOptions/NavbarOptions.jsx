import { FiBell, FiSettings, FiShoppingCart } from "react-icons/fi";

import "./NavbarOptions.scss";

const navbarOptionsData = [
  {
    id: 1,
    childrenIconComponent: <FiSettings />,
    count: null,
  },
  {
    id: 2,
    childrenIconComponent: <FiShoppingCart />,
    count: 5,
  },
];

const NavbarOptions = () => {
  return (
    <ul className="navbarOptions">
      {navbarOptionsData.map((navbarOption) => {
        return (
          <div key={navbarOption.id} className="optionsItem">
            {navbarOption.childrenIconComponent && (
              <li>
                {navbarOption.childrenIconComponent}
                {navbarOption.count ? (
                  <div className="cartCount">
                    {navbarOption.count <= 9 ? navbarOption.count : `9+`}
                  </div>
                ) : (
                  ""
                )}
              </li>
            )}
          </div>
        );
      })}
    </ul>
  );
};

export default NavbarOptions;
