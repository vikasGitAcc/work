import { ReactNode } from "react";

interface IconTextContainerProps {
  icon: ReactNode;
  text: string;
  className?: string;
  textStyle?: string;
}

function IconTextContainer({ icon, text, className, textStyle }: IconTextContainerProps) {
  return (
    <div className={`flex items-center gap-2 px-3 py-2 ${className || ""}`}>
      {icon}
      <span className={textStyle || ""}>{text}</span>
    </div>
  );
}

export default IconTextContainer;
