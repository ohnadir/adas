'use client'
import { FiUser } from "react-icons/fi";
import Modal from "../Modals/Modal";

/* interface UserMenuProps {
    currentUser?: SafeUser | null
} */
const UserMenu = () => {
    return ( 
        <div>
            <FiUser
                className="cursor-pointer" 
                size={24}
            />
            <Modal isOpen={true} />
        </div>
    );
}
 
export default UserMenu;