import Categories from "../../components/categories/Categories";
import Crousel from "../../components/crousel/crousel";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        <Categories />
        <Crousel />
      </section>
    </>
  );
};

export default Home;
