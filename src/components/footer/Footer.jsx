import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitch,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import "./Footer.css";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        {/* <div className="logo">
          <img src="./vite.svg" alt="logo" />
          Wolfers
        </div> */}
        <Logo textTitle="Wolfers" textColor="#ffd900" imgUrl="/wolfers.svg" />
        <div className="socialMediaLinks">
          <a href="#">
            <FiGithub />
          </a>
          <a href="#">
            <FiYoutube />
          </a>
          <a href="#">
            <FiTwitch />
          </a>
          <a href="#">
            <FiTwitter />
          </a>
          <a href="#">
            <FiLinkedin />
          </a>
          <a href="#">
            <FiInstagram />
          </a>
          <a href="#">
            <FiFacebook />
          </a>
        </div>
      </div>
      <div className="middle">
        <div className="middleLeft">
          <p>Links:-</p>
          <ul className="middleLinks">
            <li className="middleLink">
              <a href="#">optiona</a>
            </li>
            <li className="middleLink">
              <a href="#">optiona</a>
            </li>
            <li className="middleLink">
              <a href="#">optiona</a>
            </li>
            <li className="middleLink">
              <a href="#">optiona</a>
            </li>
            <li className="middleLink">
              <a href="#">optiona</a>
            </li>
            <li className="middleLink">
              <a href="#">optiona</a>
            </li>
          </ul>
        </div>
        <div className="middleRight">
          <p>Links:-</p>
          <ul className="middleLinks">
            <li className="middleLink">
              <a href="#">optiona</a>
            </li>
            <li className="middleLink">
              <a href="#">optiona</a>
            </li>
            <li className="middleLink">
              <a href="#">optiona</a>
            </li>
            <li className="middleLink">
              <a href="#">optiona</a>
            </li>
            <li className="middleLink">
              <a href="#">optiona</a>
            </li>
            <li className="middleLink">
              <a href="#">optiona</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <ul className="links">
          <li className="link">Home</li>
          <li className="link">Produts</li>
          <li className="link">SignIn</li>
          <li className="link">SignOut</li>
          <li className="link">Pivacy | Policy</li>
          <li className="link">Corporate Information</li>
          <li className="link">Wolfers Stroies</li>
          <li className="link">Press</li>
          <li className="link">Contact us</li>
          <li className="link">About us</li>
          <li className="link">Help</li>
        </ul>
        <div className="address">
          <span>Mail us:-</span>
          <address>
            Wolfers internet private limited,Building no 5,new colony,random
            address house no 465,Bengluru,karnataka,India
          </address>
        </div>
        <div className="address">
          <span>Office Address:-</span>
          <address>
            Wolfers internet private limited,Building no 5,new colony,random
            address house no 465,Bengluru,karnataka,India
          </address>
        </div>
      </div>

      <div className="copyright">
        <small>copyright | all right reserved 2023-24</small>
      </div>
    </footer>
  );
};

export default Footer;
