import React from "react";

type StatProps = {
  children: string;
  content: string;
};

const Stat = ({ children, content }: StatProps) => {
  return (
    <div className="text-white flex justify-center align-center flex-col gap-4 w-56">
      <div className="font-black text-5xl">{content}</div>
      <div className="font-medium text-xs">{children}</div>
    </div>
  );
};

export default Stat;
