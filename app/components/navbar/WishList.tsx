'use client'
import { IoMdHeartEmpty } from "react-icons/io";
import { useRouter } from "next/navigation"
import Link from "next/link";

const WishList = () => {
    const router = useRouter()
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