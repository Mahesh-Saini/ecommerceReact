import Categories from "../../components/categories/Categories";
import Crousel from "../../components/crousel/crousel";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_left">
        <Categories />
      </div>
      <div className="hero_right">
        <Crousel />
      </div>
    </section>
  );
};

export default Hero;
