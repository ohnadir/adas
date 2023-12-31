import Container from "@/app/components/Container"
import ProductSize from "../../components/Product/ProductSize"
import { useState } from "react";
import Button from "@/app/components/Button";


const Product = () => {
    
    return (
        <>
            {/* banner */}
            <div className="
                bg-[#f5f5f5] 
                flex flex-col md:flex-row 
                items-center justify-center 
                h-[80px] 
                leading-5 
                relative 
                text-center 
                text-[14px]
                gap-1
                "
            >
                <span className="max-w-[70%]">Fast delivery. Free shipping for orders over $80. Payment by Cash on Delivery, Tabby & More.</span>
                <span className="font-bold underline">Learn More</span>
            </div>

            <Container>

                <div>
                    {/* image container */}
                    <div></div>

                    {/* information container */}
                    <div className="">

                        {/* information */}
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
                            <h1 className="text-[25px] font-bold">Nike Dunk Low</h1>

                            {/* Product Category */}
                            <h3 className="font-semibold mb-1">Men&apos;s Shes</h3>

                            {/* Product Price */}
                            <h2>$110.00</h2>
                        </div>

                        {/* product size */}
                        <ProductSize/>
                        <Button 
                            label="Add to Bag"
                            outline
                            small
                        />

                        {/* Policy */}
                        <ul className="list-disc font-semibold">
                            <li>You can return your order for any reason, free of charge, within 30 days.</li>
                            <li>Free delivery for orders SAR 299 and above.</li>
                            <li>Order delivery is usually within 2-5 working days</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </>

    )
}

export default Product