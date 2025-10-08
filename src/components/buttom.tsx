type ReactionButtonProps = {
    color: "yellow" | "red" | "green" | "blue";
    text: string,
    active?: boolean;
    icon: React.ReactNode;
    onClick?: () => void;
}

export default function ReactionButton({color, text, active, icon, onClick}: ReactionButtonProps) {
    // 用映射避免 Tailwind 清掉動態 class
    const colorClasses = active
        ? {
            yellow: "bg-yellow-500 text-white border-yellow-500",
            red: "bg-red-500 text-white border-red-500",
            green: "bg-green-500 text-white border-green-500",
            blue: "bg-blue-500 text-white border-blue-500",
        }
        : {
            yellow: "text-yellow-500 border-yellow-500",
            red: "text-red-500 border-red-500",
            green: "text-green-500 border-green-500",
            blue: "text-blue-500 border-blue-500",
        } as const;

    return (
        <button onClick={onClick}
                className={`flex justify-around items-center border cursor-pointer rounded-full py-1 w-20 ${colorClasses[color]}`}>
            {icon}
            <p className={`font-bold`}>{text}</p>
        </button>
    )
}
