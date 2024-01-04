'use client'

interface BannerProps{
    details?: string,
    src?:  React.ReactElement;
}

const Banner: React.FC<BannerProps> = ({
    details,
    src
}) => {
    return (
        <div className="
            bg-[#f5f5f5] 
            flex flex-col md:flex-row 
            items-center justify-center 
            h-[80px] 
            leading-5 
            relative 
            text-center 
            text-[15px]
            gap-1
            "
        >   
            {src}
            <span className="max-w-[70%]">{details}</span>
        </div>
    )
}

export default Banner