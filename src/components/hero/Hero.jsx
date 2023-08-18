import Categories from "../../components/categories/Categories";
import Crousel from "../../components/crousel/crousel";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <Categories />
      <Crousel />
    </section>
  );
};

export default Hero;
