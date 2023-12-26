'use client'
import { FiUser } from "react-icons/fi";

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
        </div>
    );
}
 
export default UserMenu;