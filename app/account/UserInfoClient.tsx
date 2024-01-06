'use client'
import { FaRegCircleUser } from "react-icons/fa6";

const UserInfoClient = () => {
    return (
        <div className="flex items-center gap-3">
            <FaRegCircleUser size={25} />
            <div>
                <h1 className="font-bold leading-3 mb-1">Faizan</h1>
                <p className="leading-3">faizan@gmail.com</p>
            </div>
        </div>

    )
}

export default UserInfoClient