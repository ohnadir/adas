'use client'
import { FiUser } from "react-icons/fi";

/* interface UserMenuProps {
    currentUser?: SafeUser | null
} */
const UserMenu = () => {
    return ( 
        <div>
            <FiUser
                className="
                    cursor-pointer
                " 
                size={25}
            />
        </div>
    );
}
 
export default UserMenu;