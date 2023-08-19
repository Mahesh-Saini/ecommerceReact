import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import SingleProduct from "../../components/singleProduct/SingleProduct";
import "./Products.scss";

const data = [
  {
    id: 1,
    title: "Sony pixel extra clear dreamweaver camera",
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-digital-photo-cameracameraphotodigital-cameravideophoto-machinephoto-maker-231519335289d1map.png&f=1&nofb=1&ipt=6d72835957838e17392b4fe0740817f4e94813e63eeb4e3c72a9e88a943da819&ipo=images",
    sellingPrice: 50549,
    cuttedPrice: 90889,
  },
  {
    id: 2,
    title: "Zone mixer grinder all in one",
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fpng-mixer-3.png&f=1&nofb=1&ipt=e1b9aed2c7e54f616ac39bf1c0ff2aba53ca8b62eedde736e95538231cd45955&ipo=images",
    sellingPrice: 1349,
    cuttedPrice: 3999,
  },
  {
    id: 3,
    title: "Linear group skretched jeans",
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-mens-jeansgarmentlower-bodydenimjeansblue-1421526362760kjplj.png&f=1&nofb=1&ipt=484029305605568fb28703d67a57eefd0ffcc4743175a244b01a2423fbf04d20&ipo=images",
    sellingPrice: 1249,
    cuttedPrice: 1599,
  },
  {
    id: 4,
    title: "Google pixel one+",
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipart.info%2Fimages%2Fccovers%2F1503496379iphone-mobile-png-transparent-background.png&f=1&nofb=1&ipt=dc3303e100df2f5ab704339f997fa03b0828404ede7e55f2edfcce48344daa06&ipo=images",
    sellingPrice: 22549,
    cuttedPrice: 25599,
  },
  {
    id: 5,
    title: "Nikon only zpx564 version camera",
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fphoto_camera%2Fphoto_camera_PNG7846.png&f=1&nofb=1&ipt=61accb67663052a8495b96e4886ec2b6262213657e8395dc6d0a1966b38015e8&ipo=images",
    sellingPrice: 29549,
    cuttedPrice: 35599,
  },
  {
    id: 6,
    title: "Linear group skretched jeans",
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-digital-photo-cameracameraphotodigital-cameravideophoto-machinephoto-maker-231519335289d1map.png&f=1&nofb=1&ipt=6d72835957838e17392b4fe0740817f4e94813e63eeb4e3c72a9e88a943da819&ipo=images",
    sellingPrice: 1249,
    cuttedPrice: 1599,
  },
  {
    id: 7,
    title: "Linear group skretched jeans",
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fpng-mixer-3.png&f=1&nofb=1&ipt=e1b9aed2c7e54f616ac39bf1c0ff2aba53ca8b62eedde736e95538231cd45955&ipo=images",
    sellingPrice: 1249,
    cuttedPrice: 1599,
  },
  {
    id: 8,
    title: "Linear group skretched jeans",
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-mens-jeansgarmentlower-bodydenimjeansblue-1421526362760kjplj.png&f=1&nofb=1&ipt=484029305605568fb28703d67a57eefd0ffcc4743175a244b01a2423fbf04d20&ipo=images",
    sellingPrice: 1249,
    cuttedPrice: 1599,
  },
  {
    id: 9,
    title: "Linear group skretched jeans",
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipart.info%2Fimages%2Fccovers%2F1503496379iphone-mobile-png-transparent-background.png&f=1&nofb=1&ipt=dc3303e100df2f5ab704339f997fa03b0828404ede7e55f2edfcce48344daa06&ipo=images",
    sellingPrice: 1249,
    cuttedPrice: 1599,
  },
  {
    id: 10,
    title: "Linear group skretched jeans",
    imgUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fphoto_camera%2Fphoto_camera_PNG7846.png&f=1&nofb=1&ipt=61accb67663052a8495b96e4886ec2b6262213657e8395dc6d0a1966b38015e8&ipo=images",
    sellingPrice: 1249,
    cuttedPrice: 1599,
  },
];

const Products = () => {
  return (
    <div className="productsShowSection">
      <div className="left">left</div>
      <div className="right">
        {data.map((pItem) => {
          return <SingleProduct pItem={pItem} key={pItem.id} />;
        })}
      </div>
    </div>
  );
};

export default Products;
