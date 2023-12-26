'use client'
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    disabled?: boolean;
    actionLabel: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit, 
    disabled,
    title,
    actionLabel,
    body,
    footer
}) => {
    const [showModal, setShowModal] = useState(isOpen);
    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
          return;
        }
    
        onSubmit();
    }, [onSubmit, disabled]);

    const handleClose = useCallback(() => {
        if (disabled) {
          return;
        }
      
        setShowModal(false);
        setTimeout(() => {
          onClose();
        }, 300)
    }, [onClose, disabled]);

    if (!isOpen) {
        return null;
    }
    return ( 
        <>
            <div
                className="
                    justify-center 
                    items-center 
                    flex 
                    overflow-x-hidden 
                    overflow-y-auto 
                    fixed 
                    inset-0 
                    z-50 
                    outline-none 
                    focus:outline-none
                    bg-neutral-800/70
                "
            >
                <div className="
                    relative 
                    w-[300px]
                    sm:w-[400px]
                    my-6
                    mx-auto 
                    h-fit
                    "
                >
                {/*content*/}
                <div className={`
                    translate
                    duration-300
                    h-fit
                    ${showModal ? 'translate-y-0' : 'translate-y-full'}
                    ${showModal ? 'opacity-100' : 'opacity-0'}
                `}>
                    <div className="
                        translate
                        h-fit
                        border-0 
                        rounded-lg 
                        shadow-lg 
                        relative 
                        flex 
                        flex-col 
                        w-full 
                        bg-white 
                        outline-none 
                        focus:outline-none
                        "
                    >
                        
                    {/*header*/}
                    <div className="
                        flex 
                        items-center 
                        px-6
                        py-3
                        rounded-t
                        justify-center
                        relative
                        border-b-[1px]
                        "
                    >
                        <button
                            className="
                                p-1
                                border
                                border-black
                                rounded-full 
                                hover:opacity-70
                                transition
                                absolute
                                right-2
                            "
                            onClick={handleClose}
                        >
                            <IoMdClose size={18} />
                        </button>

                        <div className="text-lg font-semibold">
                            {title}
                        </div>
                    </div>

                    {/*body*/}
                    <div className="relative px-6 pt-6 flex-auto">
                        {body}
                    </div>

                    {/*footer*/}
                    <div className="flex flex-col gap-2 p-6">
                        <div 
                            className="
                                flex 
                                flex-row 
                                items-center 
                                gap-4 
                                w-full
                            ">
                                <Button 
                                    disabled={disabled} 
                                    label={actionLabel} 
                                    outline 
                                    small
                                    onClick={handleSubmit}
                                />
                        </div>
                        {footer}
                    </div>
                    </div>
                </div>

                </div>
            </div>
        </>
    );
}
 
export default Modal;