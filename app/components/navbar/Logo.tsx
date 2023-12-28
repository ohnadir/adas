'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from "next/link";

const Logo = () => {
    const router = useRouter()
    return (
        <Link href='/'>
            <Image
                onClick={() => router.push('/')}
                alt='Logo'
                className='cursor-pointer'
                height="70"
                width="70"
                src="/images/logo.svg"
            />
        </Link>
    );
}
 
export default Logo;