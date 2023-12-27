'use client'
import { useCallback, useState } from "react";
import Modal from "./Modal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
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
    const loginModal = useLoginModal();
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

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
    }

    const onToggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
    }, [registerModal, loginModal]);


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
        </div>
    )
    const footerContent = (
        <>
        
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                    onClick={onToggle} 
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
            onSubmit={handleSubmit(onSubmit)}
            disabled={isLoading}
            title="Register Here"
            actionLabel="Continue"
            body={bodyContent}
            footer={footerContent}
        />
    );
}
 
export default RegisterModal;