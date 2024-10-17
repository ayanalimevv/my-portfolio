export const NormalIcon = ({
  text,
  imagePath,
}: {
  text: string;
  imagePath: string;
}) => {
  return (
    <div className="hover:-translate-y-1 hover:scale-105 m-1 flex flex-col justify-center items-center w-[80px] group hover:bg-slate-700 px-1 hover:bg-opacity-30 rounded transition-all duration-300 cursor-pointer p-2">
      <img src={imagePath} className="h-12 w-12 object-cover mb-2" alt={text} />
      <p className="text-xs text-slate-400 group-hover:text-slate- transition-colors duration-200 break-words max-w-xs">
        {text}
      </p>
    </div>
  );
};
