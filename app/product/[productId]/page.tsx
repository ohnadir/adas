import Container from "@/app/components/Container"
import ProductSize from "../../components/Product/ProductSize"
import { useState } from "react";
import Button from "@/app/components/Button";

import ProductHead from "@/app/components/Product/ProductHead";
import ProductInfo from "@/app/components/Product/ProductInfo";


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
                mb-5
                "
            >
                <span className="max-w-[70%]">Fast delivery. Free shipping for orders over $80. Payment by Cash on Delivery, Tabby & More.</span>
                <span className="font-bold underline">Learn More</span>
            </div>

            <Container>

                <div>
                    {/* image container */}
                    <div></div>

                    <div>

                        {/*product head information */} 
                        <ProductHead
                            name="Nike Dunk Low"
                            category="Men's shoes"
                            price={110}
                        />

                        {/* product size */}
                        <ProductSize/>

                        {/* product description */}
                        <ProductInfo
                            description="The '80s basketball icon returns with classic details and throwback hoops flair. Channelling vintage style back onto the streets, its padded, low-cut collar lets you take your game anywhere—in comfort."
                            color="Light Bone/Phantom/Neutral Olive/Medium Olive"
                        />
                        
                        <Button 
                            label="Add to Bag"
                            outline
                            small
                        />

                        {/* Policy */}
                        <div className="mt-5 relative">
                            <ul className="list-disc font-semibold pl-4">
                                <li>You can return your order for any reason, free of charge, within 30 days.</li>
                                <li>Free delivery for orders SAR 299 and above.</li>
                                <li>Order delivery is usually within 2-5 working days</li>
                            </ul>
                        </div>


                    </div>
                </div>
            </Container>
        </>

    )
}

export default Product