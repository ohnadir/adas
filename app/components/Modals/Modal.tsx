'use client'
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
interface ModalProps {
    isOpen?: boolean;
    /* onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean; */
  }

const Modal: React.FC<ModalProps> = ({
    isOpen, 
    /* onClose, 
    onSubmit, 
    title, 
    body, 
    actionLabel, 
    footer, 
    disabled */
}) => {
    const [showModal, setShowModal] = useState(isOpen);
    return ( 
        <>
            <div className="
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
                    w-full
                    sm:w-[400px]
                    my-6
                    mx-auto 
                    h-full 
                    lg:h-auto
                    md:h-auto
                ">
                    {/*content*/}
                    <div className={`
                        translate
                        duration-300
                        h-full
                        ${showModal ? 'translate-y-0' : 'translate-y-full'}
                        ${showModal ? 'opacity-100' : 'opacity-0'}
                        `}
                    >
                        <div className="
                            translate
                            h-full
                            lg:h-auto
                            md:h-auto
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
                            p-6
                            rounded-t
                            justify-center
                            relative
                            border-b-[1px]
                            "
                        >
                            <button
                                className="
                                    p-1
                                    hover:opacity-70
                                    transition
                                    absolute
                                    right-2
                                    border-black
                                    border
                                    rounded-full
                                "
                                //   onClick={handleClose}
                                >
                                    <IoMdClose size={18}/>
                            </button>
                            <div className="text-lg font-semibold">
                            {/* {title} */}
                            </div>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            {/* {body} */}
                            <input type="text" /><input type="text" /><input type="text" /><input type="text" /><input type="text" /><input type="text" /><input type="text" /><input type="text" /><input type="text" /><input type="text" />
                        </div>
                        {/*footer*/}
                        {/* <div className="flex flex-col gap-2 p-6">
                            <div 
                            className="
                                flex 
                                flex-row 
                                items-center 
                                gap-4 
                                w-full
                            "
                            >
                            
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
        </div>
        </>
    );
}
 
export default Modal;