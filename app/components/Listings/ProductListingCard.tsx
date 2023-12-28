import Image from 'next/image';
import React from 'react'

interface ProductListingCardProps {
    data: any;
  };


const ProductListingCard: React.FC<ProductListingCardProps> = ({
    data
}) => {
    
    return (
        <div className='group'>

            {/* image container */}
            <div className='relative '>
                <Image 
                    src={data.image}
                    alt='Listing'
                    width={200}
                    height={200}
                    className='
                    '
                    />
                <div className='
                    absolute 
                    bottom-0 
                    bg-white 
                    left-2 
                    px-2
                    group-hover:bottom-2 
                    transition-all 
                    duration-[0.2s] 
                    ease-linear
                '
                >
                    ${data.price}
                </div>
            </div>

            {/* product info */}
            <div className='p-2'>
                <h2 className='w-full'>
                    {data.name}
                </h2>

                <p className='
                    text-[14px] 
                    text-[#767677]'
                >
                    {data.category}
                </p>

                <h6 className='text-[12px]'>
                    {data.tag}
                </h6>
            </div>
        </div>
    )
}

export default ProductListingCard