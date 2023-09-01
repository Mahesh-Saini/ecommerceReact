import {
  FiBell,
  FiHelpCircle,
  FiLogOut,
  FiMessageSquare,
  FiSettings,
  FiShoppingCart,
} from "react-icons/fi";

import "./NavbarOptions.scss";
import { useSelector } from "react-redux";

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

const NavbarOptions = ({
  toggleCart,
  handleToggleCart,
  toggleSettings,
  handleToggleSettings,
}) => {
  const carts = useSelector((state) => state.carts.carts);
  const cartsCount = carts?.length;
  const handleClick = (id) => {
    if (id === 1) {
      if (toggleCart) {
        handleToggleCart();
      }
      handleToggleSettings();
    }
    if (id === 2) {
      if (toggleSettings) {
        handleToggleSettings();
      }
      handleToggleCart();
    }
  };

  return (
    <ul className="navbarOptions">
      {navbarOptionsData.map((navbarOption) => {
        return (
          <div key={navbarOption.id} className="optionsItem">
            {navbarOption.childrenIconComponent && (
              <li onClick={() => handleClick(navbarOption.id)}>
                {navbarOption.childrenIconComponent}
                {navbarOption.id === 2 && cartsCount ? (
                  <div className="cartCount">
                    {cartsCount <= 9 ? cartsCount : `9+`}
                  </div>
                ) : (
                  ""
                )}
              </li>
            )}
            {navbarOption.id === 1 && toggleSettings && (
              <div className="settings">
                <div className="settingItem">
                  <FiLogOut />
                  <span>Sign out</span>
                </div>
                <div className="settingItem">
                  <FiSettings />
                  <span>Settings</span>
                </div>
                <div className="settingItem">
                  <FiHelpCircle />
                  <span>Help</span>
                </div>
                <div className="settingItem">
                  <FiMessageSquare />
                  <span>Send feedback</span>
                </div>
              </div>
            )}
            {navbarOption.id === 2 && toggleCart && (
              <div
                className="cart"
                style={{ overflowY: `${cartsCount > 7 && "scroll"}` }}
              >
                {cartsCount ? (
                  carts.map((item) => {
                    return (
                      <div key={item._id} className="cartItem">
                        <div className="imgBox">
                          <img src={item.images[0].imgUrl} alt="item image" />
                        </div>
                        <div className="titleBox">
                          <p>
                            {item.title.length > 25
                              ? item.title.slice(0, 25) + "..."
                              : item.title}
                          </p>
                          <p>Rs. {item.sellingPrice}/-</p>
                          <p>Quantity 5</p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="noItem">
                    <div className="itemBox">
                      <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdni.iconscout.com%2Fillustration%2Fpremium%2Fthumb%2Fempty-cart-2130356-1800917.png&f=1&nofb=1&ipt=fdb748f28da59531aeb0c78647a136bd7e440dd1f0fdc11a7bbd3fafb489612e&ipo=images"
                        alt="img"
                      />
                      <p>
                        Oooh there is no item in cart,Please Add items to cart
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </ul>
  );
};

export default NavbarOptions;
