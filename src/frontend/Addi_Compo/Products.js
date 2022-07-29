import Item from "./Item";
import './index.css'

const ProductsData = [
  {
    Serial_id: "101",
    name: "Laptop",
    link: "../../images/Laptop.png",
    price: "59,999",
    productDesc: "Best ever laptop",
  },
  {
    Serial_id: "102",
    name: "Camera",
    link: "../../images/Camera.webp",
    price: "25,990",
    productDesc: "Best ever camera",
  },
  {
    Serial_id: "103",
    name: "Earphones",
    link: "../../images/Laptop.png",
    price: "1499",
    productDesc: "Best ever Earphones",
  },
  {
    Serial_id: "1026",
    name: "Laptop",
    link: "../../images/Laptop.png",
    price: "59,999",
    productDesc: "Best ever laptop",
  },
  {
    Serial_id: "1035",
    name: "Laptop",
    link: "../../images/Laptop.png",
    price: "59,999",
    productDesc: "Best ever laptop",
  },
  {
    Serial_id: "1024",
    name: "Laptop",
    link: "../../images/Laptop.png",
    price: "59,999",
    productDesc: "Best ever laptop",
  },
  {
    Serial_id: "1034",
    name: "Laptop",
    link: "../../images/Laptop.png",
    price: "59,999",
    productDesc: "Best ever laptop",
  },
];

const Products = () => {
  return (
    <div>
      <div>
        <h1 className="tit">Products</h1>
      </div>
      <div className="firstLine">
        {ProductsData.map((product) => (
            <Item
              key={product.id}
              name={product.name}
              img={product.link}
              price={product.price}
              productDesc={product.productDesc}
              id={product.Serial_id}
            />
        ))}
      </div>
      
    </div>
  );
};

export default Products;
