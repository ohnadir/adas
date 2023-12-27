'use client'
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from "react-hook-form";


import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";


import Modal from "./Modal";
import Input from "../Input";
import Button from "../Button";


const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = 
  (data) => {
    /* setIsLoading(true);

    signIn('credentials', { 
      ...data, 
      redirect: false,
    })
    .then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success('Logged in');
        router.refresh();
        loginModal.onClose();
      }
      
      if (callback?.error) {
        toast.error(callback.error);
      }
    }); */
  }

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}  
        errors={errors}
        required
        placeholder="Enter Your Email"
      />
      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="Enter Your Password"
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
          // onClick={() => signIn('google')}
        />
        <Button 
          outline 
          label="Github"
          icon={AiFillGithub}
          small

          // onClick={() => signIn('github')}
        />
      </div>
      <div className="
        text-neutral-500 text-center mt-4 font-light">
          <p className="text-neutral-800">First time using Adas?
            <span 
              onClick={onToggle} 
              className="
                text-neutral-800
                cursor-pointer 
                hover:underline
              "
              > Create an account</span>
          </p>
      </div>
    </>
  )

  return(
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}
 
export default LoginModal;