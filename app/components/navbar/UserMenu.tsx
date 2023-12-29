'use client'
import { FiUser } from "react-icons/fi";
import Modal from "../Modals/Modal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

/* interface UserMenuProps {
    currentUser?: SafeUser | null
} */
const UserMenu = () => {
    const registerModal = useRegisterModal();
    
    return ( 
        <div className="relative">
            <FiUser
                className="cursor-pointer "
                size={22}
                onClick={registerModal.onOpen}
            />
            <div className="
                absolute
                -top-2
                -right-[6px] 
                flex 
                items-center 
                justify-center
                "
            >
                <div className="
                    active-animation 
                    h-3 
                    w-3 
                    bg-[#22c55eb3] 
                    rounded-full
                    "
                ></div>
            </div>
        </div>
    );
}
 
export default UserMenu;