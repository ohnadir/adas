'use client'

import { useCallback } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface DrawerProps {
    isOpen:boolean;
    onClose: () => void;
    header: React.ReactElement;
    body?: React.ReactElement;
    type?: string;
}

const Drawer: React.FC<DrawerProps> = ({
    isOpen,
    onClose,
    header,
    body,
    type
}) => {
    
    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className={`drawer
                ${type === "mobileDrawer" ? "left-0" : "right-0"}
                ${isOpen ? "open" : "close"}
            `}
        >
            <div>
                {/* Header */}
                <div className={`
                    ${type === "mobileDrawer" ? "px-[15px] " : "p-[15px] "}
                    border 
                    w-full 
                    flex 
                    items-center 
                    gap-2
                `}
                >
                    <MdKeyboardArrowLeft
                        size={25}
                        onClick={handleClose}
                        className="cursor-pointer"
                    />
                    { header }
                </div>

                {/* body */}
                <div className="p-[15px]">
                    {/* {body} */}
                </div>

                {/* footer */}
                <div className="p-[15px]">
                    {/* {footer} */}
                </div>
            </div>
        </div>
    )
}

export default Drawer