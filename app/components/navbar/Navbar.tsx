'use client';
import { useState } from "react";
import Container from "../Container"
import Cart from "./Cart";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";
import WishList from "./WishList";

const Navbar = () => {
    
    return (
        <div className="fixed w-full bg-slate-200 z-50 shadow-sm">
            <div className=" border-b-[1px]">
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
                        {/* desktop Logo */}
                        <div className="hidden md:block ">
                            <Logo/>
                        </div>

                        {/* mobile menu item */}
                        <div className="flex md:hidden items-center gap-4">
                            <MobileMenu/>
                            <WishList/>
                        </div>

                        {/* mobile version hamburger menu */}
                        <div className="block md:hidden">
                            <Logo/>
                        </div>

                        
                        <div className="
                            flex 
                            items-center 
                            gap-4
                        ">
                            <UserMenu/>
                            <Search/>
                            <div className="hidden md:block">
                                <WishList/>
                            </div>
                            <Cart/>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar