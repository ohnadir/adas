'use client'

import Button from "../components/Button"
import Input from "../components/Input"



const AccountClient = () => {
    return (
        <div>
            <h5 className="text-xl font-bold">Personal Information</h5>
            <br />
            <Input 
                id="email" 
                label="Email"
                placeholder="Enter your Email Address"
            />
            <br />
            <Input 
                id="name" 
                label="Name"
                placeholder="Enter your Name"
            />
            <p className="py-2">Change your account details below, or <span className="underline cursor-pointer">click here</span> to change your password</p>
            <Button 
                label="Update" 
                outline
                small
            />
        </div>
    )
}

export default AccountClient