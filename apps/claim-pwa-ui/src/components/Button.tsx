import React from "react";

function Button({
  callback,
  text,
  variant,
  children,
}: {
  callback: () => void;
  text?: string;
  variant?: "outline" | "default";
  children?: React.ReactNode;
}) {
  return (
    <button
      className={`${
        variant == "outline" ? "border-2 border-black text-black" : "bg-black text-white"
      } font-future font-normal rounded-xl px-5 py-3 shadow-2xl hover:shadow-md transition-all`}
      onClick={callback}
    >
      {children}
      {text}
    </button>
  );
}

export default Button;
