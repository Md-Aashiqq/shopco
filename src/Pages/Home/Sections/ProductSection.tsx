/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Product from "@/Pages/_Components/Product";
import { fetchProduct } from "@/redux/slice/productSlice";
import { ProductProps } from "@/utils/data";
import axios from "axios";
import { s } from "node_modules/vite/dist/node/types.d-aGj9QkWt";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

interface ProductSectionProps {
  title: string;
  category: string;
}

function ProductSection({ title, category }: ProductSectionProps) {
  // const [products,setProducts] = useState<ProductProps[] | []>([])
  const [intinalCount, setIntinalCount] = useState(4);

  const dispatch = useDispatch();

  const {
    data: products,
    status,
    errorMsg,
  } = useSelector((state: any) => state.product);

  useEffect(() => {
    dispatch(fetchProduct({ intinalCount }));
  }, [dispatch, intinalCount]);

  // if(status === "loading"){
  //   return <h1>Loading...</h1>
  // }

  // if(status === "failed"){
  //   <h1>{errorMsg}</h1>
  // }

  return (
    <div className="p-[50px]">
      <h1 className="text-4xl text-center font-bold">{title + category}</h1>

      {/* */}

      {status === "loading" ? (
        <div className="grid gap-4 grid-cols-4 mt-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index}>
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-4 mt-4">
          {products?.map((product: ProductProps, index: number) => (
            <Product key={index} {...product} />
          ))}
        </div>
      )}

      <div className="flex mt-8 justify-center">
        <Button
          onClick={() => setIntinalCount(intinalCount + 4)}
          variant={"outline"}
          className="mt-4 w-[200px] rounded-lg text-[16px] font-bold"
        >
          {products?.length % 4 === 0 ? "Load More" : "No More"}
        </Button>
      </div>
    </div>
  );
}

export default ProductSection;

// const fetchProduct = useCallback(async () => {
//         try {
//             const response = await axios.get(`http://localhost:3000/products/${intinalCount}?category=${category}`);
//             const data = response?.data;
//             setProducts(data)
//         }catch(error){
//             console.log(error)
//         }
// },[intinalCount,category])

// useEffect(()=>{
//     fetchProduct()
// },[fetchProduct])
