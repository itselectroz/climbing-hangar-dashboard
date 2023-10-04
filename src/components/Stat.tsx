import React from "react";

type StatProps = {
  children: string;
  content: string;
  className?: string;
};

const Stat = ({ children, content, className }: StatProps) => {
  return (
    <div
      className={`text-white flex justify-center align-center flex-col gap-4 w-56 ${className}`}
    >
      <div className="font-black text-5xl">{content}</div>
      <div className="font-medium text-xs">{children}</div>
    </div>
  );
};

export default Stat;
