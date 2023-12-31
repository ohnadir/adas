'use client'

import { useState } from "react"

const ProductSize = () => {
    const [sizes, setSize] = useState<number>()
    const arrayRange = (start:number, stop:number, step:number) =>
        Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );

    const sizeArray = arrayRange(38, 46, 2);
    return (
        <div>
            <h3 className="text-lg font-bold leading-3 tracking-[1px]">Select Size</h3>
            <ul className="
                grid
                grid-cols-3
                gap-4
                my-4
            ">
                {
                    sizeArray?.map((size, index)=>
                        <li 
                            key={index} 
                            className={`
                                ${sizes === size ? "border border-black" : "border"}
                                px-4
                                py-1
                                hover:border-black
                                transition-all
                                duration-300
                                ease-linear
                                rounded-[4px]
                                cursor-pointer
                                text-center
                            `}
                            onClick={()=>setSize(size)}
                        >
                            {size}
                        </li>
                    )
                }
            </ul>
        </div>

    )
}

export default ProductSize