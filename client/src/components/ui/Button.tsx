import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  type?: "outline" | "solid" | "noBg";
  icon?: React.ReactNode;
}

function Button({ children, onClick, type, icon }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={
        type === "noBg"
          ? "rounded-2xl px-4 py-2"
          : type === "solid"
          ? "border border-1 bg-yellow-600 border-yellow-600 rounded-2xl px-4 py-2"
          : "border border-1 text-yellow-600 border-yellow-600 rounded-2xl px-4 py-2"
      }
    >
      <div className="flex justify-center items-center gap-2">
        {icon && <>{icon}</>}
        {children}
      </div>
    </button>
  );
}

export default Button;
