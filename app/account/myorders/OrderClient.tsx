'use client'
import { IoEyeOutline } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";
import Modal from "@/app/components/Modals/Modal";

const OrderClient = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = ()=>{
        setIsOpen(false)
    }
    const body = (
        <>
            <div>
                <p className="text-[#757575] mb-1"> Order ID <span className="font-semibold text-black">1222528743</span></p>
                <p className="text-[#757575] mb-0"> Place On <span className="font-semibold text-black">12,March 2019</span> </p>
            </div>
            <hr />
            <div>
                <div>
                    <h1 className="font-bold text-lg">Headphones Bose 35 ||</h1>
                    <p className="text-[#757575] my-2">Qt: 1 Item</p>
                    <p className="text-[#757575] my-2">
                        <span className="font-bold text-xl">$ 299</span>
                        via (COD)
                    </p>
                </div>
            </div>
        </>
    )
    return (
        <div className="overflow-x-auto w-full shadow-xl">
            <table className="w-[970px] lg:w-full border">
                <thead>
                    <tr className="text-center border-b-[1px]">
                        <th className="p-[8px]">Order ID</th>
                        <th className="p-[8px]">Date</th>
                        <th className="p-[8px]">Name</th>
                        <th className="p-[8px]">Quantity</th>
                        <th className="p-[8px]">Price</th>
                        <th className="p-[8px]">Shipping Cost</th>
                        <th className="p-[8px]">Delivery Status</th>
                        <th className="p-[8px]">Refund</th>
                        <th className="p-[8px]">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center border-b-[1px]">
                        <td>#0012451</td>
                        <td>04/08/2020 12:34 AM</td>
                        <td>Andrew Stevano</td>
                        <td>2 Pcs</td>
                        <td>$100.00</td>
                        <td>$0.00</td>
                        <td>Delivery</td>
                        <td>
                            <button className="bg-green-400 text-white rounded-md w-[50px]">Get</button>
                        </td>
                        <td className="
                            flex 
                            items-center 
                            justify-center 
                            gap-3
                            p-2
                            "
                        >
                            <IoEyeOutline onClick={()=>setIsOpen(true)} className="cursor-pointer" size={22} />
                            <button className="
                                w-[25px] 
                                h-[25px]
                                bg-red-200
                                rounded-full
                                flex items-center justify-center
                                "
                            >
                                <FaRegTrashCan 
                                    className="text-red-500" 
                                    size={16} 
                                />
                            </button>
                        </td>
                    </tr>
                    <tr className="text-center border-b-[1px]">
                        <td className="p-[8px]">#0012451</td>
                        <td className="p-[8px]">04/08/2020 12:34 AM</td>
                        <td className="p-[8px]">Andrew Stevano</td>
                        <td className="p-[8px]">2 Pcs</td>
                        <td className="p-[8px]">$100.00</td>
                        <td className="p-[8px]">$0.00</td>
                        <td className="p-[8px]">Delivery</td>
                        <td className="p-[8px]">
                            <button>Get</button>
                        </td>
                        <td className="
                            flex 
                            items-center 
                            justify-center 
                            gap-3
                            p-2
                            "
                        >
                            <IoEyeOutline className="cursor-pointer" size={22} />
                            <button className="
                                w-[25px] 
                                h-[25px]
                                bg-red-200
                                rounded-full
                                flex items-center justify-center
                                "
                            >
                                <FaRegTrashCan 
                                    className="text-red-500" 
                                    size={16} 
                                />
                            </button>
                        </td>
                    </tr>
                    <tr className="text-center border-b-[1px]">
                        <td className="p-[8px]">#0012451</td>
                        <td className="p-[8px]">04/08/2020 12:34 AM</td>
                        <td className="p-[8px]">Andrew Stevano</td>
                        <td className="p-[8px]">2 Pcs</td>
                        <td className="p-[8px]">$100.00</td>
                        <td className="p-[8px]">$0.00</td>
                        <td className="p-[8px]">Delivery</td>
                        <td className="p-[8px]">
                            <button>Get</button>
                        </td>
                        <td className="
                            flex 
                            items-center 
                            justify-center 
                            gap-3
                            p-2
                            "
                        >
                            <IoEyeOutline className="cursor-pointer" size={22} />
                            <button className="
                                w-[25px] 
                                h-[25px]
                                bg-red-200
                                rounded-full
                                flex items-center justify-center
                                "
                            >
                                <FaRegTrashCan 
                                    className="text-red-500" 
                                    size={16} 
                                />
                            </button>
                        </td>
                    </tr>
                </tbody>
                
            </table>
            {
                isOpen 
                && 
                <Modal
                    isOpen={isOpen}
                    onClose={handleClose}
                    onSubmit={handleClose}
                    title="Details"
                    actionLabel="Close"
                    body={body}
                />
            }
        </div>
    )
}

export default OrderClient