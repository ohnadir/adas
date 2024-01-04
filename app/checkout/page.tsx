import Banner from "../components/Banner"
import CheckoutSummery from "../components/Checkout/CheckoutSummery"
import Container from "../components/Container"
import ProductList from "@/app/components/Utils/ProductListing.json"
import CheckoutProductListingCard from "../components/Listings/CheckoutProductListingCard"


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
                    <CheckoutSummery/>
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
            </Container>
        </>
    )
}

export default Checkout