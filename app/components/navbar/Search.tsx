'use client'
import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';

import useSearchDrawer from '@/app/hooks/useSearchDrawer';
const Search = () => {
    const searchDrawer = useSearchDrawer();
    return ( 
        <div>
            <BiSearch
                onClick={searchDrawer.onOpen}
                className="cursor-pointer" 
                size={25}
            />
        </div>
    );
}
 
export default Search;