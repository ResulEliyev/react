import { useEffect, useState } from "react";
import Container from "../components/Container";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import axios from "axios";





export default () => {

    const [products, setProducts] = useState([]);

    const getProducts = async() => {
      const res = await axios.get("https://fakestoreapi.com/products/1");
      return res;
    }
    useEffect(() => {
      getProducts().then((r) => setProducts(r.data));
    }, [])
  

  return (
    <section className="w-[85%] mx-auto py-20">
      <Container>
        <div className="grid grid-cols-2 h-full">
          <LeftPage key={products.id} product={products} />
          <RightPage key={products.id} product={products}/>
        </div>
      </Container>
    </section>
  );
};
