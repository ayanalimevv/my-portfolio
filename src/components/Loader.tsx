// Spinning Loader with Text
export const Loader = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <span className="loading loading-infinity loading-md"></span>
      <span className="text-xs">{text}</span>
    </div>
  );
};
