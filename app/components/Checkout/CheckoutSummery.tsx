'use client'



const CheckoutSummery = () => {
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
                <p>Standard delivery</p>
                <p>FREE</p>
            </div>
            <hr className="my-4" />

            <div className="flex items-center justify-between">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">SAR 2,100.00</p>
            </div>
            <p className="text-[14px]">Including SAR 273.90 in taxes</p>

            <hr className="my-4" />
        </div>
    )
}

export default CheckoutSummery