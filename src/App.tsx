import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./Components/productCard";
import AddingButton from "./Components/AddingButton";
import { productTypes } from "./interfaces/products";
function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [products, setProducts] = useState([]);
  async function getInfo() {
    try {
      const respons = await fetch(" http://localhost:3500/InteractWithTheDB");
      const data = await respons.json();
      setProducts(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getInfo();
  }, []);
  let theID = 9385;
  return (
    <div>
      <main className="container">
        <AddingButton />
        <div className="max-w-sm md:max-w-screen-xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product: productTypes) => (
            <ProductCard
              key={++theID}
              Title={product.Title}
              discription={product.discription}
              ImgURL={product.ImgURL}
              colors={product.colors}
              price={product.price}
              catagory={product.catagory}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
