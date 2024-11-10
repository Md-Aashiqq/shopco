import { Button } from "@/components/ui/button";
import Product from "@/Pages/_Components/Product";
import { ProductProps } from "@/utils/data";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

interface ProductSectionProps {
  title: string;
  category: string;
}

function ProductSection({title,category}:ProductSectionProps) {

    const [products,setProducts] = useState<ProductProps[] | []>([])
    const [intinalCount, setIntinalCount] = useState(4)

    const fetchProduct = useCallback(async () => {
            try {
                const response = await axios.get(`http://localhost:3000/products/${intinalCount}?category=${category}`);
                const data = response?.data;
                setProducts(data)
            }catch(error){
                console.log(error)
            }
    },[intinalCount,category])

    
    useEffect(()=>{
        fetchProduct()
    },[fetchProduct])
    

  return (
    <div className="p-[50px]">
      <h1 className="text-4xl text-center font-bold">{title}</h1>

      <div className="grid gap-4 grid-cols-4 mt-4">
         {products.map((product,index) => (
           <Product key={index} {...product} />
         ))}
      </div>

      <div className="flex mt-8 justify-center">
        <Button onClick={() => setIntinalCount(intinalCount + 4)} variant={"outline"} className="mt-4 w-[200px] rounded-lg text-[16px] font-bold">

           {products.length % 4 === 0 ? "Load More" : "No More"}

        </Button>
      </div>
    </div>
  );
}

export default ProductSection;
