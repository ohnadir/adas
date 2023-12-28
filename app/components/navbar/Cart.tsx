'use client'
import { LiaShoppingBagSolid } from "react-icons/lia";
import Link from "next/link";
const Cart = () => {
    return (
        <Link href='/cart'>
            <LiaShoppingBagSolid
                className="cursor-pointer" 
                size={25}
            />
        </Link>
    );
}
 
export default Cart;