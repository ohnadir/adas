'use client'

interface AnimatedInputProps {
    id?: string;
    label: string;
}

const AnimatedInput: React.FC<AnimatedInputProps> = ({
    id, 
    label
}) => {
    return (
        <div className="w-full relative mb-4">
            <input
                placeholder=" "
                className={`
                peer
                w-full
                px-4
                py-3
                font-light 
                bg-transparent 
                border-[1px]
                rounded-md
                outline-[1px]
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                `}
            />
            <label 
                className={`
                absolute 
                text-md
                duration-150 
                transform 
                -translate-y-3 
                top-3
                left-4
                z-10 
                origin-[0]
                peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75
                peer-focus:bg-white
                peer-focus:-translate-y-6
                peer-focus:px-1
                `}
            >
                {label}<span className="text-red-500">*</span> 
            </label>
        </div>
    )
}

export default AnimatedInput