'use client'

import Image from "next/image"
import { VscTrash } from "react-icons/vsc";

const CartProductListingCard = () => {
    return (
        <div className="
            w-full sm:w-[70%] md:w-[70%] lg-[60%]
            flex
            justify-between
            "
        >   
            <div className="flex gap-10">
                <Image
                    src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/3569152bea8f4c4b989ea2e7a3fd135b_9366/the-grinch-forum-low-shoes-kids.jpg"
                    alt="Shoes image"
                    width={200}
                    height={200}
                    className="h-fit"
                />
                <div className="h-fit">
                    <h1 className="font-semibold">Nike Air Force 1 &apos;07</h1>
                    <p className="text-[#757575] font-semibold">Men&apos;s Shoes</p>
                    <p className="text-[#757575] font-semibold">White/white</p>

                    <div className="
                        flex 
                        flex-col 
                        md:flex-row 
                        items-center 
                        gap-3 
                        my-3
                        "
                    >

                        {/* size  */}
                        <div className="
                            text-[#757575] 
                            flex 
                            items-center  
                            gap-3
                            "
                        >
                            <label>Size</label>
                            <select name="size" id="" className="w-[60px]">
                                <option value="38">38</option>
                                <option value="40">40</option>
                                <option value="42">42</option>
                                <option value="4">44</option>
                            </select>
                        </div>

                        {/* quantity */}
                        <div className="
                            text-[#757575] 
                            flex 
                            items-center 
                            gap-3
                            "
                        >
                            <label>Quantity</label>
                            <select name="quantity" id="" className="w-[50px]">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>
                    <VscTrash className="text-[#757575]" size={25} />
                </div>
            </div>
            <p className="
                top-0 
                sm:top-10 
                relative
                "
            >
                SAR 725.00
            </p>
        </div>
    )
}

export default CartProductListingCard