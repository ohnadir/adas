'use client'

import Image from "next/image";
import MultipleColorProduct from "@/app/components/Utils/product.json";
import { useState } from "react";
interface ProductColorProps{
    color: [];
}
interface ColorType {
    id:number;
    color: string;
    src: string[]
  }

const ProductColor = () => {
    const [selectColor, setSelectColor] = useState<ColorType | undefined>();
    const [colorName, setColorName] = useState<string>(selectColor?.color || MultipleColorProduct[0].color);
    return (
        <div className="mb-3">
            <p className="font-bold mb-3">Colors</p>
            <div className="
                grid
                grid-cols-6
                gap-5
                w-[300px]
                "
            >
                {
                    MultipleColorProduct?.map((item)=>(
                        <div key={item.id} className="w-[50px] relative group">
                            <Image
                                src={MultipleColorProduct[`${item.id}`]?.src[0]}
                                width={50}
                                height={50}
                                alt="Product Color"
                                onMouseOver={()=>setColorName(item?.color)}
                                onClick={()=> item && setSelectColor(item)}
                                className="cursor-pointer"
                            />
                            <div className={`
                                absolute 
                                w-full
                                
                                ${selectColor?.color === item?.color ? 'h-[3px]' : "h-0" }
                                bg-black
                                group-hover:h-[3px]
                                left-0 
                                bottom-0 
                                transition-all 
                                duration-100 
                                ease-linear 
                                `}
                            ></div>
                        </div>
                    ))
                }
            </div>
            <p className="
                text-[14px] 
                mt-[5px] 
                font-[400] 
                tracking-normal
                "
            >
                {colorName}
            </p>
        </div>
    )
}

export default ProductColor