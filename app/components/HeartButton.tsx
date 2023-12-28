'use client';
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";


interface HeartButtonProps {
    productId: string
}

const HeartButton: React.FC<HeartButtonProps> = ({
    productId
}) => {
    const [hasFavorited, setHasFavorited] = useState(false);
    return (
        <div
            className="
                relative
                hover:opacity-80
                transition
                cursor-pointer
            "
            onClick={()=>setHasFavorited(!hasFavorited)}
        >
            <AiOutlineHeart
                size={28}
                className="
                    fill-white
                    absolute
                    -top-[2px]
                    -right-[2px]
                "
            />
            <AiFillHeart
                size={24}
                className={
                    `${ hasFavorited ? "fill-rose-500 " : "fill-neutral-500/70" }`
                }
            />
        </div>
    )
}

export default HeartButton