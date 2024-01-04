'use client'

import { useCallback, useEffect } from "react";
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
    
    /* useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
      }else{
          document.body.style.overflow = 'auto';
    }
    }, [isOpen]); */

    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);

    if (!isOpen) {
        return null;
    }
    

    return (
      <div
        id="sidebar"
        className={`
          fixed 
          transition-transform
          z-50  
          transition-opacity 
          duration-500 ${
          isOpen
            ? "opacity-100"
            : "opacity-0 pointer-events-none min-h-0 min-w-0"
        }`}
      >
        <div
          className={`fixed inset-y-0 
          left-0 w-1/5 
          bg-[#212529]
            
           duration-[1000ms] ${
            isOpen ? "transform transition-transform duration-[1000ms]  translate-x-0" : "duration-[1000ms] transition-transform transform -translate-x-full"
          }`}
        >
          x
          <div className="p-8 my-12 lg:p-8">
            
          </div>
        </div>
      </div>
    )
}

export default Drawer