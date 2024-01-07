import Link from "next/link";
import Container from "../components/Container";
import UserInfoClient from "./UserInfoClient";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Container>
            <div className="mt-10 flex gap-10 ">
                <div className="border w-[30%] h-fit p-5">
                    <h3 className="mb-5 font-bold text-2xl">My Profile</h3>
                    <UserInfoClient/>
                    <ul className="mt-4 flex flex-col gap-2">
                        <Link href='/account'>
                            <li>Personal Information</li>
                        </Link>
                        <Link href='/account/myorders'>
                            <li>My Orders</li>
                        </Link>
                        <li>Logout</li>
                    </ul>
                </div>
                <div className="border w-[70%] p-5">
                    {children}
                </div>
            </div>
        </Container>
    )
}