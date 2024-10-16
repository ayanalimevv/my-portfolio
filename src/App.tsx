// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectsPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import OffScreen from "./pages/OffScreenPage";
import RedirectToResume from "./pages/RedirectToResumePage";
import Layout from "./layouts/Layout";
import { ItemListPage } from "./layouts/ListPageLayout";
import {
  AdditionalDetails,
  AwardsDetails,
  BlogLinks,
  EducationDetails,
  SkillsDetails,
  SocialLinks,
} from "./constants";
import IconPageLayout from "./layouts/IconPageLayout/IconPageLayout";

const App: React.FC = () => {
  // All the urls and component to render array
  // There are two type of pages one rendering icons and another rendering list
  // so isListRendering is true for list rendering items.
  const routes = [
    { path: "/", component: <HomePage />, isPageRenderList: false },
    {
      path: "/socials",
      component: <IconPageLayout array={SocialLinks} />,
      isPageRenderList: false,
    },
    {
      path: "/blogs",
      component: <IconPageLayout array={BlogLinks} />,
      isPageRenderList: false,
    },
    {
      path: "/projects",
      component: <ProjectPage />,
      isPageRenderList: false,
    },
    {
      path: "/education",
      array: EducationDetails,
      isPageRenderList: true,
    },
    {
      path: "/awards",
      array: AwardsDetails,
      isPageRenderList: true,
    },
    {
      path: "/additional",
      array: AdditionalDetails,
      isPageRenderList: true,
    },
    { path: "/skills", component: <IconPageLayout array={SkillsDetails} />, isPageRenderList: false },
    { path: "/off", component: <OffScreen />, isPageRenderList: false },
    {
      path: "/resume",
      component: <RedirectToResume />,
      isPageRenderList: false,
    },
    { path: "*", component: <NotFound />, isPageRenderList: false },
  ];

  return (
    <>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={`url ${index}`}
                path={route.path}
                element={
                  <Layout isPageRenderList={route.isPageRenderList}>
                    {route.isPageRenderList ? (
                      <ItemListPage array={route.array} />
                    ) : (
                      route.component
                    )}
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
      {/* <span>Happily crafted by <a href="https://linktr.ee/ayanalimevv" className='underline' target='_blank'>@ayanalimevv</a> 💖</span> */}
    </>
  );
};

export default App;
