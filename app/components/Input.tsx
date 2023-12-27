'use client';
import { 
    FieldErrors, 
    FieldValues, 
    UseFormRegister 
} from "react-hook-form";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    placeholder?:string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = "text",
    placeholder, 
    disabled,
    register,
    required,
    errors,
}) => {
    const alertIcon = required ? "*" : ""
    return (
        <div>
            <label 
                className={`
                text-[16px]
                ${errors[id] ? 'text-rose-500' : '#000'}
                `}
            >
                {label}
                <span className="text-red-500">{required ? "  *" : ""}</span>
            </label>
        
            <input
                id={id}
                disabled={disabled}
                {...register(id, { required })}
                placeholder={placeholder}
                type={type}
                className={`
                    peer
                    w-full
                    px-4
                    h-[42px]
                    font-light 
                    bg-[#eee]
                    rounded-md
                    mt-[7px]
                    outline-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
                    ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
                `}
            />
        </div>
    )
}

export default Input