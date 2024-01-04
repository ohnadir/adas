import Banner from "../components/Banner"
import CheckoutSummery from "../components/Checkout/CheckoutSummery"
import Container from "../components/Container"
import ProductList from "@/app/components/Utils/ProductListing.json"
import CheckoutProductListingCard from "../components/Listings/CheckoutProductListingCard"
import AnimatedInput from "../components/Inputs/AnimatedInput"


const Checkout = () => {
    return (
        <>
            {/* Banner  */}
            <Banner
                details="Your order may be split into more than one delivery."
                title="checkout"
            />
            <Container>
                <div className="mt-6">

                    <div className="">
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
                    </div>
                    

                    <div>
                        <CheckoutSummery/>

                        {/* checkout product view */}
                        <div className=" h-[430px] overflow-y-scroll">
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
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Checkout