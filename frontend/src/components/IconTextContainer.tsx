

interface IconTextContainerProps {
    icon: React.ReactNode;
    text: string;
    className?: string;
    textStyle?: string;
}   

function IconTextContainer({ icon, text, className, textStyle }: IconTextContainerProps) {
    return (
        <div className={`px-3 py-2 flex items-center justify-center gap-1 ${className}`}>
            {icon}
            <span className={`text-sm flex items-center ${textStyle}`}>{text}</span>
        </div>
    );
}

export default IconTextContainer;