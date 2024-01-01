'use client'

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import ProductListingCard from './Listings/ProductListingCard';
import Slider from 'react-slick';


const productListing = [
    {
      "id" : 1,
      "name" : "Forum Low x The Grinch Shoes",
      "image" : "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/3569152bea8f4c4b989ea2e7a3fd135b_9366/the-grinch-forum-low-shoes-kids.jpg",
      "price" : 110,
      "category" : "Original",
      "tag" : "Best Seller"
    },
    {
        "id" : 2,
        "name" : "SAMBA OG SHOES",
        "image" : "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b3e59b7240ef448ba8fef510727a19fa_9366/Samba_OG_Shoes_White_IF6514_01_standard.jpg",
        "price" : 100,
        "category" : "Original",
        "tag" : "Best Seller"
    },
    {
        "id" : 3,
        "name" : "SUPERSTAR XLG SHOES",
        "image" : "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/80f7597da9b14927b351cb0b721b1312_9366/Superstar_XLG_Shoes_Grey_IF8114_01_standard.jpg",
        "price" : 77,
        "category" : "Original",
        "tag" : "Best Seller"
    },
    {
        "id" : 4,
        "name" : "SUPERSTAR XLG SHOES",
        "image" : "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e75d90ba64ed4c47ac30c74490090bf5_9366/Superstar_XLG_Shoes_Black_IG9777_01_standard.jpg",
        "price" : 88,
        "category" : "Original",
        "tag" : "Best Seller"
    },
    {
        "id" : 5,
        "name" : "SUPERSTAR SHOES",
        "image" : "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f42e619a00da417ca71d35cedf0dbf17_9366/Superstar_Shoes_Brown_IF7677_01_standard.jpg",
        "price" : 44,
        "category" : "Original",
        "tag" : "Best Seller"
    }
]

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

const RecentlyViewed = () => {
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
        <div className='my-8'>
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

export default RecentlyViewed