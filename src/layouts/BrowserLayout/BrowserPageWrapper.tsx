import { ReactNode } from "react";

export const BrowserPageWrapper = ({
  isPageRenderList,
  children,
}: {
  isPageRenderList: boolean;
  children: ReactNode;
}) => {
  return (
    <div
      className={
        isPageRenderList
          ? "bg-base-300 p-4 flex flex-col gap-2"
          : `bg-base-300 p-4 gap-2 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6`
      }
    >
      {children}
    </div>
  );
};
