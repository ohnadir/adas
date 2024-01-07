import { Metadata } from "next"
import OrderClient from "./OrderClient"


const MyOrders = () => {
    return (
        <OrderClient/>
    )
}

export default MyOrders

export const metadata: Metadata = {
    title: 'My Orders'
}