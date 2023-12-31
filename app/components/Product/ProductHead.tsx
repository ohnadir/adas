'use client'
import React from 'react'

interface ProductHeadProps{
    name:string,
    price:number,
    category:string
} 


const ProductHead: React.FC<ProductHeadProps> = ({
    name,
    price,
    category
}) => {
    return (
        <div className="mb-5">
            <h3 className="
                text-[#fa5400] 
                text-[15px] 
                font-bold
                "
            >
                Just in
            </h3>

            {/* Product Name */}
            <h1 className="text-[25px] font-bold">{name}</h1>

            {/* Product Category */}
            <h3 className="font-semibold mb-1">{category}</h3>

            {/* Product Price */}
            <h2>${price}</h2>
        </div>
    )
}

export default ProductHead