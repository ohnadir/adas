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
        <div>
            <FiUser
                className="cursor-pointer"
                size={22}
                onClick={registerModal.onOpen}
            />
        </div>
    );
}
 
export default UserMenu;