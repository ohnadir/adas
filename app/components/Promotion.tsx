'use client'

import HoverButton from "./HoverButton"

const Promotion = () => {
    return (
        <div className='
            bg-yellow-300 
            flex 
            items-center 
            justify-center 
            h-[200px]
        '
        >
            <div className='
                flex 
                flex-col 
                items-center
                sm:flex-row 
                gap-3
                '
            >
                <h1 className="
                    w-full 
                    text-lg 
                    sm:text-2xl 
                    font-bold
                    "
                >
                    JOIN OUT ADICLUB & GET 15% OFF
                </h1>
                <HoverButton
                    label="SIGN UP FOR FREE"
                    url='/login'
                />
            </div>
        </div>
    )
}

export default Promotion