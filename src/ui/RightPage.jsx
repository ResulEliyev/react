import { useState } from "react";
import Cartbtn from "../cartbtn/Cartbtn";
import Flex from "../components/Flex";
import { SlBasket } from "react-icons/sl";




export default ({product}) => {
  const[plus,setPlus]=useState(1)

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPlus(!isNaN(value) && value >= 1 ? value : 1);
  };



  
  return (
    <div className="relative px-4 ">
      <Flex
        className="absolute top-[30%] left-0"
        flexDirection={"column"}
        gap={12}
        alignItems={"flex-Start"}
      >
        <div>SKU: BST-498</div>
        <h1 className="font-bold text-3xl">{product.title}</h1>
        <div>{product.price}</div>
        <div>
         {product.description}
        </div>

        <Flex className="absolute bottom-[-40%] gap-4">
          <button  
          onClick={() => setPlus(prev => Math.max(prev - 1, 1))}
           className="border w-10 rounded  h-9">-</button>
          <input
            type="number"
            defaultValue="1"
            min="1"
            step="1"
            max="100"
            className="border w-10 rounded  h-9 pl-2"
            onChange={handleChange}
            value={plus}
          />
          <button
           onClick={ ()=> setPlus(prev => prev + 1)}
            className="border w-10 rounded  h-9">+</button>
          <Cartbtn prefix={<SlBasket />}>Add to Cart</Cartbtn>
        </Flex>
      </Flex>
    </div>
  );
};
