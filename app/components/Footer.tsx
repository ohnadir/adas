'use client'

const Footer = () => {
    return (
        <div className="
            bg-[#282c31] 
            border-[1px] 
            border-[#767677]
            h-[150px]
            text-[#d3d7da]
            flex
            items-center
            justify-center
            "
        >
            <div className="text-[12px]">
                <ul className=" 
                    flex
                    
                    items-center
                    justify-between
                    gap-12
                    sm:gap-5
                    
                ">
                    <li>Your Privacy Choices</li>
                    <li className="h-[20px] w-[1px] hidden sm:block bg-[#d3d7da]"></li>
                    <li className="hidden sm:block">Privacy Policy</li>
                    <li className="hidden sm:block h-[20px] w-[1px] bg-[#d3d7da]"></li>
                    <li>Terms and Conditions</li>
                </ul>
                <p className="text-center block sm:hidden my-5">Privacy Policy</p>
                <div className="text-center mt-0 sm:mt-5">© 2023 adidas America, Inc.</div>
            </div>
        </div>
    )
}

export default Footer