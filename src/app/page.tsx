import React from "react";
import Post from "@/components/post";

export default function Home() {
    return (
        <>
            <div className={`flex justify-start items-start flex-col p-5 w-full bg-white rounded-xl relative`}>
                <Post/>
            </div>
        </>
    )
}