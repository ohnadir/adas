'use client'
import { IoMenuSharp } from "react-icons/io5";
import useMobileDrawer from "@/app/hooks/useMobileDrawer"

const MobileMenu = () => {
    const mobileDrawer = useMobileDrawer();
    return (
        <button>
            <IoMenuSharp
                onClick={mobileDrawer.onOpen}
                size={27} 
            />
        </button>
    )
}

export default MobileMenu