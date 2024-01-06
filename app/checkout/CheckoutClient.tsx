'use client'

import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import CheckoutSummery from "../components/Checkout/CheckoutSummery"
import Container from "../components/Container"
import ProductList from "@/app/components/Utils/ProductListing.json"
import CheckoutProductListingCard from "../components/Listings/CheckoutProductListingCard"
import AnimatedInput from "../components/Inputs/AnimatedInput"
import PhoneInput from '@/app/components/Inputs/PhoneInput'
import CountryCityArea from '@/app/components/Inputs/CountryCityArea'
import Button from "../components/Button"
import { RiArrowUpSLine, RiArrowDownSLine  } from "react-icons/ri";


const CheckoutClient = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (isOpen === true) {
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);
    return (
        <>
            {/* Banner  */}
            <Banner
                details="Your order may be split into more than one delivery."
                title="checkout"
            />

            <Container>
                <div className="
                    mt-6 
                    flex 
                    flex-col-reverse 
                    lg:flex-row 
                    gap-8 
                    lg:gap-12"
                >

                    <div className="w-full lg:w-[60%]">

                        <div className="flex gap-1">
                            <div className="bg-green-600 w-[25px] h-[25px] rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffff" viewBox="0 0 512 512" id="tick">
                                    <path d="M223.9 329.7c-2.4 2.4-5.8 4.4-8.8 4.4s-6.4-2.1-8.9-4.5l-56-56 17.8-17.8 47.2 47.2L340 177.3l17.5 18.1-133.6 134.3z"></path>
                                </svg>
                            </div>
                            <h1 className="text-xl font-semibold h-fit">Delivery</h1>
                        </div>

                        <hr className="my-5" />

                        <p className="mb-3 font-semibold">Add Address</p>
                        
                        <AnimatedInput
                            label="First Name"
                        />
                        
                        <AnimatedInput
                            label="Last Name"
                        />

                        

                        <PhoneInput/>
                        <p className="text-[#757575] mt-1">A carrier might contact you to confirm delivery.</p>

                        <div className="flex items-center gap-2 my-3">
                            <input className="h-[20px] w-[20px]" type="checkbox" />
                            <label className="font-semibold">This is also my Whatsapp number</label>
                        </div>

                        <AnimatedInput
                            label="Address"
                        />
                        <CountryCityArea/>

                        <div className="mb-4">
                            <h1>Shipping Method</h1>
                            <div className="flex items-center gap-2 my-1">
                                <input className="h-[20px] w-[20px]" type="radio" name="" id="" />
                                <label htmlFor="">Standard delivery</label>
                            </div>
                            <p>Delivery in 3 to 5 working days.</p>
                        </div>

                        <Button
                            label="Continue"
                            outline
                            small
                        />
                    </div>
                    <div className="w-full lg:w-[40%]">
                        <CheckoutSummery/>
                        <div 
                            onClick={()=>setIsOpen(!isOpen)} 
                            className="
                                lg:hidden 
                                flex 
                                items-center 
                                justify-between 
                                mb-3
                            "
                        >
                            <p className="text-xl font-semibold">Summary</p>
                            <div className="flex items-center gap-4">
                                <p>$200 ({ProductList.length} Items)</p>
                                {
                                    isOpen
                                    ?
                                    <RiArrowUpSLine size={22} />
                                    :
                                    <RiArrowDownSLine size={22} />
                                }
                            </div>
                        </div>
                        
                        {/* checkout product view */}
                        {
                            isOpen
                            ?
                            <div className={`
                                ${isOpen ? "h-[430px] " : "h-0"}
                                transition-h
                                duration-300
                                ease-in-out
                                overflow-y-scroll
                                `}
                            >
                                <h2 className="mb-3 font-bold">Estimated delivery by Sunday, January 07 - Tuesday, January 09</h2>
                                {
                                    ProductList?.map((product)=>
                                        <CheckoutProductListingCard
                                            product={product}
                                            key={product.id}
                                        />
                                    )
                                }
                            </div>
                            :
                            null
                        }
                        
                    </div>
                </div>
            </Container>
        </>
    )
}

export default CheckoutClient