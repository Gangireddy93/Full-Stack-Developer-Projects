import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "../src/context/Cart";
import "./index.css"
function App() {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar onCartClick={() => setShowCart(!showCart)} />

      {showCart ? <Cart /> : <ProductList product={products} />}
    </>
  );
}

export default App;
