'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
    const router = useRouter()
    return ( 
        <Image
            onClick={() => router.push('/')}
            alt='Logo'
            className='cursor-pointer'
            height="70"
            width="70"
            src="/images/logo.svg"
        />
    );
}
 
export default Logo;