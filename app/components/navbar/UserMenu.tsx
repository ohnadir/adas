'use client'
import { FiUser } from "react-icons/fi";
import Modal from "../Modals/Modal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import { FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";

/* interface UserMenuProps {
    currentUser?: SafeUser | null
} */
const UserMenu = () => {
    const registerModal = useRegisterModal();
    const user = true;
    
    return ( 
        <div className="relative">
            {
                user
                ?
                <Link href="/account">
                    <FaRegCircleUser size={22} />
                </Link>
                :
                <FiUser
                    className="cursor-pointer "
                    size={22}
                    onClick={registerModal.onOpen}
                />
            }
            <div className="
                absolute
                -top-2
                -right-[8px] 
                flex 
                items-center 
                justify-center
                "
            >
                {
                    user
                    ?
                    <div className="
                        active-animation 
                        h-3 
                        w-3 
                        bg-[#22c55eb3] 
                        rounded-full
                        "
                    ></div>
                    :
                    null
                }
            </div>
        </div>
    );
}
 
export default UserMenu;