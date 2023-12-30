'use client'
import { IoMdHeartEmpty } from "react-icons/io";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";


interface WishListProps {
    count:number
}

const WishList: React.FC<WishListProps> = ({
    count
}) => {
    
    if(count){
        return (
            <AiFillHeart
                size={24}
                className="fill-rose-500 cursor-pointer"
            />
        )
    }
    
    return (
        <Link href="/wishlist">
            <IoMdHeartEmpty
                className="cursor-pointer" 
                size={25}
            />
        </Link>

    )
}

export default WishList