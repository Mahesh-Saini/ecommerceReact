import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitch,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import "./Footer.scss";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerLeft">
        <Link to={"/"}>
          <Logo textTitle="Wolfers" textColor="#ffd900" imgUrl="/wolfers.svg" />
        </Link>
        <div className="socialMediaLinks">
          <a href="#" target="_blank">
            <FiGithub />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <FiYoutube />
          </a>
          <a href="#" target="_blank">
            <FiTwitch />
          </a>
          <a href="#" target="_blank">
            <FiTwitter />
          </a>
          <a href="#" target="_blank">
            <FiLinkedin />
          </a>
          <a href="#" target="_blank">
            <FiInstagram />
          </a>
          <a href="#" target="_blank">
            <FiFacebook />
          </a>
        </div>
      </div>
      <div className="footerMiddle">
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
      <div className="footerRight">
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
