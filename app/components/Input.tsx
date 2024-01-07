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
    register?: UseFormRegister<FieldValues>,
    errors?: FieldErrors
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
                `}
            >
                {label}
                <span className="text-red-500">{required ? "  *" : ""}</span>
            </label>
        
            <input
                id={id}
                disabled={disabled}
                placeholder={placeholder}
                type={type}
                className={`
                    peer
                    w-full
                    px-4
                    
                    h-[38px]
                    font-light 
                    bg-[#eee]
                    rounded-md
                    mt-[7px]
                    outline-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                `}
            />
        </div>
    )
}

export default Input