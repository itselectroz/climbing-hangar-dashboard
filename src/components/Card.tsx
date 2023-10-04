import React from "react";

type CardProps = {
  className?: string;
};

const Card = ({ className }: CardProps) => {
  return (
    <div
      className={`bg-color-secondary-background w-11/12 h-48 rounded-xl md:h-full md:w-card md:max-w-xl ${className}`}
    ></div>
  );
};

export default Card;
