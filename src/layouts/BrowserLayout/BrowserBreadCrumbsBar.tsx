import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";

export const BrowserBreadCrumbsBar = () => {
  return (
    <div className="mockup-browser-toolbar">
      <div
        className="input items-center"
        style={{ display: "flex !important" }}
      >
        <BreadCrumbs />
      </div>
    </div>
  );
};
