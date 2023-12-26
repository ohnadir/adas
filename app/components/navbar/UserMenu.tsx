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
            
            <MenuItem 
                label="Sign up" 
                onClick={registerModal.onOpen}
            />
        </div>
    );
}
 
export default UserMenu;