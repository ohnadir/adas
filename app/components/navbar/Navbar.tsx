'use client';
import Container from "../Container"
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-slate-200 z-10 shadow-sm">
        <div className="py- border-b-[1px]">
            <Container>
                <div
                    className="
                        flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
                        md:gap-0
                    "
                >
                    <Logo/>
                    <div className="
                        flex 
                        items-center 
                        gap-4
                    ">
                        <UserMenu/>
                        <Search/>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Navbar