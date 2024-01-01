'use client';

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import ProductListingCard from './ProductListingCard';
import Slider from 'react-slick';
import productListing from "../Utils/ProductListing.json";




interface ArrowProps {
    currentSlide?: number;
    slideCount?: number;
}

const ArrowLeft: React.FC<ArrowProps> = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className="
            absolute 
            w-[35px]
            h-[35px]
            bg-white
            border border-[#eee]
            rounded-full
            shadow-md
            top-[50%]
            left-0
            transform translate-y-[-50%]
            z-10
        "
    >
        <BiChevronLeft size={25} className="mx-auto" />
    </button>
);

const ArrowRight: React.FC<ArrowProps> = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className="next
            absolute 
            w-[35px]
            h-[35px]
            bg-white
            border border-[#eee]
            rounded-full
            shadow-md
            top-[50%]
            right-0
            transform translate-y-[-50%]
        "
    >
        <BiChevronRight size={25} className="mx-auto" />
    </button>
);


const CompleteProductListingCard = () => {
    const settings = {
        dots: false,
        arrows:true,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className='my-12'>
            <h1 className='text-[30px] font-bold tracking-[1.5s] mb-5'>COMPLETE THE LOOK</h1>
            <Slider {...settings}>
                {
                    productListing?.map((listing: any)=>(
                        <ProductListingCard
                            key={listing.id}
                            data={listing}
                        />
                    ))
                }
            </Slider>
        </div>
    )
}

export default CompleteProductListingCard