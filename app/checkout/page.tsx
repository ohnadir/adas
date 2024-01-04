import Banner from "../components/Banner"
import CheckoutSummery from "../components/Checkout/CheckoutSummery"
import Container from "../components/Container"


const Checkout = () => {
    return (
        <>
            {/* Banner  */}
            <Banner
                details="Your order may be split into more than one delivery."
                title="checkout"
            />
            <Container>
                <div className="mt-6 ">
                    <CheckoutSummery/>
                </div>
            </Container>
        </>
    )
}

export default Checkout