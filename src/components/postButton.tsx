'use client'

import React from "react";
import {PlusIcon} from '@heroicons/react/24/outline';


export default function Home() {

    return (
        <>
            <button
                className={`fixed bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded-full h-50 w-50 hover:scale-110 cursor-pointer z-10 md:transition-all`}>
                <PlusIcon className={`size-20 absolute top-5 left-1/2 -translate-x-1/2 stroke-3 text-gray-300`}/>
            </button>
        </>
    )
}