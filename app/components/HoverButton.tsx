'use client'

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

interface HoverButtonProps {
    label: string,
    url:string
}

const HoverButton: React.FC<HoverButtonProps> = ({
    label,
    url
}) => {
    return (
        <Link href={url}>
            <div className={`
                ${label === "SHOP WOMEN" ? "w-[175px]" : "w-[150px]"} 
                relative
                group 
            `}>
                <button className={`
                    bg-white
                    leading-10
                    flex
                    gap-3 
                    pl-3
                    items-center
                    ${label === "SHOP WOMEN" ? "w-[175px]" : "w-[150px]"} 
                    relative
                    z-20
                    font-bold
                `}
                >
                    {label}
                    <BsArrowRight
                        size={22}
                        className="
                            group-hover:ml-[3px] 
                            transition-all 
                            duration-[0.2s] 
                            ease-linear
                        "
                    />
                </button>
                <div className="
                    absolute 
                    top-1 
                    left-1 
                    w-full 
                    h-full 
                    border 
                    border-white
                    group-hover:top-0 
                    group-hover:left-0 
                    transition-all 
                    duration-[0.2s] 
                    ease-linear 
                    z-10"
                    
                >
                </div>
            </div>
        </Link>
    )
}

export default HoverButton; 