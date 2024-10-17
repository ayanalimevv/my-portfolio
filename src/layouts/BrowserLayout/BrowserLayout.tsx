import { ReactNode } from "react";
import { BrowserTopNavigationBar } from "./BrowserTopNavigationBar";
import { BrowserBreadCrumbsBar } from "./BrowserBreadCrumbsBar";
import { BrowserPageWrapper } from "./BrowserPageWrapper";

export const BrowserLayout = ({
  children,
  isPageRenderList,
}: {
  children: ReactNode;
  isPageRenderList: boolean;
}) => {
  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      <div className="mockup-browser bg-base-300 border border-slate-600 lg:min-w-[600px] lg:min-h-[400px] shadow-lg">
        
        {/* Component that renders very top of the browser window which contains breadcrumbs for navigation */}
        <BrowserBreadCrumbsBar />

        {/* Component which contains navigation back button and switch off button */}
        <BrowserTopNavigationBar />

        {/* Component that wraps page content under it. Only this parts changes in every page. */}
        <BrowserPageWrapper
          children={children}
          isPageRenderList={isPageRenderList}
        />
      </div>
    </div>
  );
};
