'use client'

interface CartSummaryProps {

}


const CartSummary = () => {
    return (
        <div className="mb-8 ">
            <h1 className="text-xl font-semibold mb-3">Summary</h1>
            <div className="flex justify-between">
                <p>Subtotal (9 Items)</p>
                <div>
                    <p>SAR 6,350.00</p>
                    <p className="text-[14px] text-[#757575]">(Inclusive of VAT)</p>
                </div>
            </div>
            <hr className="my-4" />
            <div className="flex items-center justify-between">
                <p>Total</p>
                <p>SAR 6,350.00</p>
            </div>
            <hr className="my-4" />

            <div>
                <p className="text-[14px] font-semibold text-[#757575]">Delivery Fee will be calculated at checkout</p>
            </div>

            <div className="bg-[#F5F5F5] mt-3 border border-[#d6d6d3] p-2 rounded-md font-semibold">
                or 4 interest-free payments of SAR 1587.50. No fees. Shariah-compliant.
                <span className="underline">Learn more</span>
            </div>
        </div>
    )
}

export default CartSummary