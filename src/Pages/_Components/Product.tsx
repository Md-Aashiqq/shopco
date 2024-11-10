import React from 'react'

import shrit from "../../assets/shirt.png"
import { Star, StarHalf } from 'lucide-react'
import { ProductProps } from '@/utils/data'



function fullStar(count: number){
    return Array.from({ length: count }, (_, index) => <Star key={index} className='text-amber-400 fill-amber-400 w-[14px] h-[14px]' />);
}



function Product(product:ProductProps) {
  return (

    <div className='w-[300px] h-[400px]'>
            <img src={shrit} alt="Product" className="w-full rounded-md h-[298px] object-cover" />
            <h3 className='text-[20px] mt-4 font-bold'>{product.name}</h3>

            <div className='rating flex items-center gap-2'>
                {fullStar(Math.floor(product.rating))}
                {product.rating % 1 !== 0 && <StarHalf className='text-amber-400 fill-amber-400 w-[14px] h-[14px]' />}
                <p className='text-[14px]'>{product.rating}/5</p>
            </div>
            <p className='price flex items-center gap-3 mt-1 text-[24px] font-bold' >
                {product.discountPrice && <del className='text-slate-600 font-semibold' >${product.discountPrice}</del>}
                <span className={`${product.discountPrice ? "text-amber-400" : "text-gray-500"}`}>${product.price}</span>
                {product.discountPercentage && <span className='text-red-400 rounded-lg bg-red-200 py-1 px-2 text-[14px] font-semibold' >-{product.discountPercentage}%</span>}
            </p>
    </div>

  )
}

export default Product