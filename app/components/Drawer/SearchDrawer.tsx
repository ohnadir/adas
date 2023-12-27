'use client'

import { useState } from "react";
import Drawer from "./Drawer";
import useSearchDrawer from "@/app/hooks/useSearchDrawer";

const SearchDrawer = () => {
    const searchDrawer = useSearchDrawer();
    const [keyword, setKeyword] = useState<string>("");
    const headerContent=(
        <div className="flex w-full items-center gap-3">
            <input className="
                border-none 
                outline-none 
                bg-transparent 
                w-full !important 
                " 
                type="text" 
                placeholder="Search"
                value={keyword}
                onChange={(e)=>setKeyword(e.target.value)}
            />
            {
                keyword ? <span onClick={()=>setKeyword("")} className="cursor-pointer">clear</span> : null
            }
            
        </div>
    )
    return (
        <Drawer
            isOpen={searchDrawer.isOpen}
            onClose={searchDrawer.onClose}
            header={headerContent}
        />
    )
}

export default SearchDrawer