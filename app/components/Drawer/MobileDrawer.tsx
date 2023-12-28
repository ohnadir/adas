'use client'

import { useEffect, useState } from "react";
import Logo from "../navbar/Logo";
import Drawer from "./Drawer";
import useMobileDrawer from "@/app/hooks/useMobileDrawer"


const MobileDrawer = () => {
    const mobileDrawer = useMobileDrawer();
    
    const headerContent=(
        <div className="mx-auto">
            <Logo/>
        </div>
    )
    return (
        <Drawer
            isOpen={mobileDrawer.isOpen}
            onClose={mobileDrawer.onClose}
            header={headerContent}
            type="mobileDrawer"
        />
    )
}

export default MobileDrawer