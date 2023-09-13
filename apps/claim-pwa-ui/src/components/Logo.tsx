import React from "react";

const Logo = () => {
  return (
    <a href="/">
      <div className="flex gap-1 items-baseline">
        <div className="w-5 h-5 rounded-full bg-black" />
        <div className="w-5 h-5 rounded-full bg-black" />
        <div className="w-5 h-5 rounded-full bg-black" />
      </div>
      <p className="font-poppins font-semibold text-black">F r e n s</p>
    </a>
  );
};

export default Logo;
