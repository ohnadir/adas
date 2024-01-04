import Banner from "../components/Banner";
import Button from "../components/Button";
import CartSummary from "../components/Cart/CartSummary";
import Container from "../components/Container";
import CartProductListingCard from "../components/Listings/CartProductListingCard";
import RecommendedProductListingCard from "../components/Listings/RecommendedProductListingCard";


const Cart = () => {
    return (
        <>
            {/* banner */}
            <Banner
                details="Free delivery for orders SAR 299 and above"
                src={
                    <svg fill="none" width="22" height="22" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"> 
                    <path d="M14.25 3.75C13.01 3.75 12 4.76 12 6.5V13.5" id="Vector" stroke="#111111" strokeMiterlimit="10" strokeWidth="1.5"></path> 
                    <path d="M20.25 9.75H3.75" id="Vector_2" stroke="#111111" strokeMiterlimit="10" strokeWidth="1.5"></path> 
                    <path d="M14.25 3.75H18.64L20.25 9.75V20.25H3.75V9.75L5.36 3.75H10.5" id="Vector_3" stroke="#111111" strokeMiterlimit="10" strokeWidth="1.5"></path> 
                </svg>
                }
            />

            <Container>
                <div>
                    {/* cart added product listing section */}
                    <div>
                        <CartProductListingCard/>
                    </div>

                    {/* cart summary */}
                    <div>
                        <CartSummary/>
                        <Button
                            label="Checkout"
                            small
                            outline
                        />
                    </div>

                    {/* recommended product */}
                    <RecommendedProductListingCard

                    />
                </div>
            </Container>
            
        </>
    )
}

export default Cart;