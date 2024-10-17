import { ReactNode } from "react";
import { BrowserLayout } from "../layouts/BrowserLayout/BrowserLayout";
import { ItemListPage } from "../layouts/ListPageLayout";
import { List } from "../types";

// Wrapper for all the routes
// Render ItemListPage or IconComponent depending on isPageRenderList
export const RouteRenderer = ({
  isPageRenderList,
  IconComponent,
  ItemArray,
}: {
  isPageRenderList: boolean;
  IconComponent: ReactNode;
  ItemArray?: List[];
}) => {
  return (
    <BrowserLayout isPageRenderList={isPageRenderList}>
      {isPageRenderList ? <ItemListPage array={ItemArray} /> : IconComponent}
    </BrowserLayout>
  );
};
