type StatProps = {
  children: string;
  content: string;
  className?: string;
};

const Stat = ({ children, content, className }: StatProps) => {
  return (
    <div
      className={`text-white flex justify-center align-center flex-col gap-4 mx-5 md:w-60 ${className}`}
    >
      <div className="font-bold text-5xl md:text-6xl">{content}</div>
      <div className="font-light text-sm">{children}</div>
    </div>
  );
};

export default Stat;
