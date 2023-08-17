import Categories from "../../components/categories/Categories";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        <Categories />
        <div className="scrollbar">scrollbar</div>
      </section>
    </>
  );
};

export default Home;
