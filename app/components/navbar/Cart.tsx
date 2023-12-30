'use client'
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoBagOutline } from "react-icons/io5";
import Link from "next/link";


const Cart = () => {
    const bagItemCount= 1;
    return (
        <Link href='/cart' className="relative flex items-center justify-center">
            <IoBagOutline
                className="cursor-pointer" 
                size={24}
            />
            {bagItemCount > 0 && (
                <span className="absolute font-bold text-[10px] top-[32%]">{bagItemCount}</span>
                )
            }
        </Link>
    );
}
 
export default Cart;