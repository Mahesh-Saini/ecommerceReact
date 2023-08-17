import { useEffect, useState } from "react";
import "./Categories.css";

const categoriesData = [
  {
    id: 1,
    title: "Clothes",
    url: "clothes1",
    subcategories: [
      {
        id: 1,
        title: "Headwear/Headgear",
        url: "path",
        items: [
          "Baseball caps",
          "Beanies",
          "Berets",
          "Boaters",
          "Bobbler hats",
          "Bonnets",
          "Bowlers",
          "Bucket hats",
          "Chupallas",
          "Cowboy hats",
          "Fedoras",
          "Sailor hats",
        ],
      },
      {
        id: 2,
        title: "Head Tie/Scarves",
        url: "path",
        items: [
          "Cotton",
          "Chiffon",
          "Silk",
          "Cashmere",
          "Pashmina",
          "Velvet",
          "Wool",
          "Net",
          "Viscose",
          "Acrylic",
          "Alpaca",
          "Linen",
          "Satin",
        ],
      },
      {
        id: 3,
        title: "Masks",
        url: "path",
        items: ["froges", "jeans", "pents", "skelts"],
      },
      {
        id: 4,
        title: "Regular Garments",
        url: "path",
        items: [
          "Tops",
          "Blouse",
          "Crop Top",
          "Shirt",
          "Sweater",
          "Tank Top",
          "Tube Top",
          "Bottoms",
          "Bloomers",
          "kilt",
          "Pants/Trousers",
          "Sarong",
          "Shorts",
          "Skirts",
        ],
      },
      {
        id: 5,
        title: "Full Body Wear",
        url: "path",
        items: [
          "Sportswear",
          "Bodysuit",
          "Coordinates",
          "Coveralls / Overalls",
          "Dresses / Gowns",
          "Onesies / Jumpsuits",
          "Rompers",
          "Suits",
          "Uniforms",
          "Military",
          "Regional outfits",
          "Religious clothing",
        ],
      },
      {
        id: 6,
        title: "Specialty clothing",
        url: "path",
        items: ["Bathrobe", "Costume", "Drag", "Livery"],
      },
    ],
  },
  {
    id: 2,
    title: "Groceries",
    url: "groceries1",
    subcategories: [
      {
        id: 1,
        title: "Masale",
        url: "path",
        items: ["m1", "m2", "m3"],
      },
      {
        id: 2,
        title: "Vegetable",
        url: "path",
        items: ["v1", "v2", "v3", "v4", "v5"],
      },
    ],
  },
  {
    id: 3,
    title: "Kitchen & Tools",
    url: "groceries1",
    subcategories: [
      {
        id: 1,
        title: "Machine's",
        url: "path",
        items: ["m1", "m2", "m3"],
      },
      {
        id: 2,
        title: "Boxes",
        url: "path",
        items: ["v1", "v2", "v3", "v4", "v5"],
      },
    ],
  },
  {
    id: 4,
    title: "Home and Appliences",
    url: "groceries1",
    subcategories: [
      {
        id: 1,
        title: "ha1",
        url: "path",
        items: ["m1", "m2", "m3"],
      },
      {
        id: 2,
        title: "ha2",
        url: "path",
        items: ["v1", "v2", "v3", "v4", "v5"],
      },
    ],
  },
  {
    id: 5,
    title: "Electronics",
    url: "elesk",
    subcategories: [
      {
        id: 1,
        title: "Mobile",
        url: "path",
        items: [
          "jeans",
          "innerwear",
          "underwear",
          "jakets",
          "shirt",
          "t-shirt",
          "pents",
          "trousers",
        ],
      },
      {
        id: 2,
        title: "Computer & Assocries",
        url: "path",
        items: ["Sharee", "kurta", "suits", "lahega", "jeans"],
      },
      {
        id: 3,
        title: "Childrens",
        url: "path",
        items: ["froges", "jeans", "pents", "skelts"],
      },
      {
        id: 4,
        title: "Weddings",
        url: "path",
        items: ["Full setup", "bridgroom setup", "brideCover"],
      },
      // {
      //   id: 5,
      //   title: "Casuals",
      //   url: "path",
      //   items: ["k1", "k2", "k3"],
      // },
      // {
      //   id: 6,
      //   title: "Assoesries",
      //   url: "path",
      //   items: ["belt", "pers", "lady pers"],
      // },
    ],
  },
  {
    id: 6,
    title: "Fresh",
    url: "freslj",
    subcategories: [
      {
        id: 1,
        title: "Vegetables",
        url: "path",
        items: ["m1", "m2", "m3"],
      },
      {
        id: 2,
        title: "Fruits",
        url: "path",
        items: ["v1", "v2", "v3", "v4", "v5"],
      },
      {
        id: 2,
        title: "Meat",
        url: "path",
        items: ["v1", "v2", "v3", "v4", "v5"],
      },
    ],
  },
  {
    id: 7,
    title: "Play and Games",
    url: "groceries1",
    subcategories: [
      {
        id: 1,
        title: "Toys",
        url: "path",
        items: ["m1", "m2", "m3"],
      },
      {
        id: 2,
        title: "Taddy's",
        url: "path",
        items: ["v1", "v2", "v3", "v4", "v5"],
      },
    ],
  },
  {
    id: 8,
    title: "Furnitures",
    url: "fur",
    subcategories: [
      {
        id: 1,
        title: "Wooden",
        url: "path",
        items: ["m1", "m2", "m3"],
      },
      {
        id: 2,
        title: "Pily",
        url: "path",
        items: ["v1", "v2", "v3", "v4", "v5"],
      },
    ],
  },
];

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [subcategoryData, setSubcategoryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeItem, setActiveItem] = useState("Clothes");
  const totalItems = categoriesData.length;
  const pageLimit = 10;
  const possiblePages = Math.ceil(totalItems / pageLimit);

  useEffect(() => {
    const slicedData = categoriesData.slice(
      currentPage * pageLimit - pageLimit,
      currentPage * pageLimit
    );
    setCategories(slicedData);
    getSubcategoriesData(slicedData, slicedData[0].title);
  }, [currentPage]);

  const getSubcategoriesData = (categories, itemTitle) => {
    categories.forEach((category) => {
      if (category.title === itemTitle) {
        setSubcategoryData((prev) => [...category.subcategories]);
        setActiveItem(itemTitle);
      }
    });
  };

  const handlePrevButton = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextButton = () => {
    if (currentPage < possiblePages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="categorySection">
      <div className="category">
        <ul className="categoryItem">
          {categories.map((item) => {
            return (
              <li
                className={`categoryItems ${
                  activeItem === item.title ? "itemActive" : ""
                }`}
                key={item.id}
                onClick={() => getSubcategoriesData(categories, item.title)}
              >
                {item.title}
              </li>
            );
          })}

          {currentPage > 1 && (
            <button className="prevButton" onClick={handlePrevButton}>
              Prev
            </button>
          )}
          {currentPage < possiblePages && (
            <button className="nextButton" onClick={handleNextButton}>
              Next
            </button>
          )}
        </ul>
      </div>
      <div className="subcategory">
        {subcategoryData && (
          <>
            {subcategoryData.map((item) => {
              return (
                <div className="subcategoryItemContainer" key={item.id}>
                  <span className="subcategoryTitle">{item.title}</span>
                  <ul className="subcategoryItem">
                    {item.items.map((i, index) => {
                      return (
                        <li className="subcategoryItems" key={index}>
                          {i}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Categories;
