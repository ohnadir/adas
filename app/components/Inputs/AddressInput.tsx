'use client'
import { RiArrowUpSLine, RiArrowDownSLine  } from "react-icons/ri";
import { ICountry, IState, ICity } from 'country-state-city'
import { useEffect, useState } from "react";

interface AddressInputProps{
    label: string,
    data?: (ICountry | IState | ICity)[] | undefined;
    isOpen?: boolean,
    action?: () => void;
    secondaryAction?: any;
}

const AddressInput: React.FC<AddressInputProps> = ({
    label,
    data,
    isOpen,
    action,
    secondaryAction

}) => {
    
    const [name, setName] = useState<string>()
    useEffect(() => {
        if (isOpen === true) {
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);
    
    const handleName=(e:any)=>{
        setName(e.name)
        secondaryAction(e)
    }
    useEffect(() => {
        setName(data && data[0]?.name)
    }, [data]);
    return (
        <div>
            <div className='
                relative
                w-full 
                h-[45px] 
                rounded-md 
                border 
                border-[#e5e7eb]
                px-3
                flex
                items-center
                cursor-pointer
                mb-3
                '
                onClick={action}
            >   
                <div className='
                    w-full
                    relative 
                    flex 
                    items-center 
                    justify-between
                    '
                >
                    <p className='text-[#ccc] font-bold'>{  name ? name : label  }</p>
                    {
                        isOpen
                        ?
                        <RiArrowUpSLine size={25} />
                        :
                        <RiArrowDownSLine size={25} />
                    }
                </div>
                {
                    isOpen && (data?.length !== 0) ?

                    <div className='
                        absolute 
                        bg-white 
                        rounded-md  
                        top-[55px] 
                        border 
                        left-0 
                        w-full 
                        h-[250px] 
                        overflow-y-scroll 
                        shadow-xl
                        z-20
                        '
                    >
                        <ul>
                            {
                                data?.map((item, index) => (
                                    <li 
                                        key={index} 
                                        className='
                                            px-4 
                                            py-1 
                                            hover:bg-[#eee] 
                                            transition-all 
                                            duration-300
                                            cursor-pointer
                                        '
                                        onClick={()=>handleName(item)}
                                    >
                                        {item.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default AddressInput