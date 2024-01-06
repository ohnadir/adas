import { Metadata } from 'next'
import AccountClient from "./AccountClient"
import Layout from "./layout"


const Account = () => {
    return (
        <AccountClient/>
    )
}

export default Account

export const metadata: Metadata = {
    title: 'Account',
    description: 'Create an account or log in to your existing account.'
}