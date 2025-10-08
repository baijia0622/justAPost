'use client'

import ReactionButton from "@/components/buttom";
import {ArrowDownCircleIcon, ArrowUpCircleIcon} from "@heroicons/react/24/outline";
import React, {useState, useEffect} from "react";
import {Barlow_Condensed} from "next/font/google";

const barlowCondensed = Barlow_Condensed({
    variable: '--font-barlow-condensed',
    subsets: ['latin'],
    weight: '500',
    style: 'italic'
});


export default function Post() {
    const [count, setCount] = useState(90);
    const [reaction, setReaction] = useState<"up" | "down" | null>(null);

    const currentCount = 90;

    const onUpClick = () =>
        setReaction((prev) => (prev === "up" ? null : "up"));

    const onDownClick = () =>
        setReaction((prev) => (prev === "down" ? null : "down"));

    useEffect(() => {
        setCount(currentCount);
    }, []);

    useEffect(() => {
        switch (reaction){
            case "up":
                console.log("你按讚了貼文");
                setCount(currentCount + 1);
                // 這邊放按讚後的伺服端動作
                break;
            case "down":
                console.log("你踩了貼文");
                setCount(currentCount - 1);
                // 這邊放踩貼文後的伺服端動作
                break;
            case null:
                console.log("你取消了你的反應");
                setCount(currentCount);
                // 這邊放取消反應後的伺服端動作
                break;
        }
    }, [reaction]);

    return (
        <>
            <h1>
                Hello, Next.js!
            </h1>
            <p>
                This is a simple Next.js application.
            </p>
            <div className={`border-t border-gray-200 w-full pt-2 mt-2 flex sm:justify-end justify-center items-center gap-2`}>
                <ReactionButton color={`yellow`} text={`頂`}
                                icon={<ArrowUpCircleIcon className="size-7"/>}
                                active={reaction === "up"}
                                onClick={onUpClick}/>

                <ReactionButton color={`red`} text={`踩`}
                                icon={<ArrowDownCircleIcon className="size-7"/>}
                                active={reaction === "down"}
                                onClick={onDownClick}/>
            </div>
            <p className={`absolute top-[10px] right-[25px] text-7xl text-black/10 font-barlow ${barlowCondensed.variable}`}>{count}</p>
        </>
    )
}