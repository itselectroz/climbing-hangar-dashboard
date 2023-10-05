import React from "react";

type StatProps = {
  children: string;
  content: string;
  className?: string;
};

const Stat = ({ children, content, className }: StatProps) => {
  return (
    <div
      className={`text-white flex justify-center align-center flex-col gap-4 md:w-56 ${className}`}
    >
      <div className="font-bold text-5xl md:text-6xl">{content}</div>
      <div className="font-light text-xs md:text-sm">{children}</div>
    </div>
  );
};

export default Stat;
