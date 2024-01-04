'use client'

import Image from "next/image";

interface CheckoutProductListingCardProps {
    product: any;
}

const CheckoutProductListingCard: React.FC<CheckoutProductListingCardProps> = ({
    product
}) => {
    return (
        <div className="flex gap-3 mb-4">
            <Image
                src={product?.image}
                alt="product photo"
                width={200}
                height={200}
                className="h-fit"
            />
            <div>
                {/* product name */}
                <h2>{product?.name}</h2>
                <p>{product?.category}</p>
                <p className="text-[15px] text-[#757575]">Qty 1</p>
                <p className="text-[15px] text-[#757575]">Size EU 45</p>
                <p className="text-[15px] text-[#757575]">$ 700.00</p>
            </div>
        </div>
    )
}

export default CheckoutProductListingCard