'use client'
import { useState } from "react";
import Modal from "./Modal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { 
    FieldValues, 
    SubmitHandler,
    useForm
} from "react-hook-form";
import Input from "../Input";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Button from "../Button";

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register, 
        handleSubmit,
        formState: {
            errors
        },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
    });
    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                id="email"
                label="Full Name"
                placeholder="Enter Your Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="name"
                label="Email"
                placeholder="Enter Your Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Password"
                placeholder="Enter Your Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Button 
                outline 
                small
                label="Continue with Github"
                onClick={handleSubmit}
            />
        </div>
    )
    const footerContent = (
        <>
        
            <div className="flex flex-col sm:flex-row gap-4">
            <Button 
                outline 
                label="Google"
                icon={FcGoogle}
                small
                // onClick={() => ()} 
            />
            <Button 
                outline 
                label="Github"
                small
                icon={AiFillGithub}
                // onClick=""
            />
            
            </div>
            <div 
                className="
                text-neutral-500 
                text-center 
                mt-4 
                font-light
                "
            >
                <p>Already have an account?
                <span 
                    // onClick={onToggle} 
                    className="
                    text-neutral-800
                    cursor-pointer 
                    hover:underline
                    "
                    > Log in</span>
                </p>
            </div>
        </>
      )
    return ( 
        <Modal
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
            disabled={isLoading}
            title="Register Here"
            body={bodyContent}
            footer={footerContent}
        />
    );
}
 
export default RegisterModal;