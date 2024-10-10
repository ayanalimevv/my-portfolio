// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import Socials from './pages/SocialsPage';
import ProjectPage from './pages/ProjectsPage';
import NotFound from './pages/NotFound';
import SkillsPage from './pages/SkillsPage';
import OffScreen from './pages/OffScreen';
import RedirectToResume from './pages/RedirectToResume';
import Layout from './pages/Layout';
import { ItemListPage } from './components/ItemListPage';
import { AdditionalDetails, AwardsDetails, EducationDetails } from './constants';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  console.log(location.pathname
  );
  const urls = [
    { path: '/', component: <HomePage />, isGridLayout: true },
    { path: '/socials', component: <Socials />, isGridLayout: true },
    { path: '/projects', component: <ProjectPage />, isGridLayout: true },
    { path: '/education', isGridLayout: false, isListLayout: true, array: EducationDetails },
    { path: '/awards', isGridLayout: false, isListLayout: true, array: AwardsDetails },
    { path: '/additional', isGridLayout: false, isListLayout: true, array: AdditionalDetails },
    { path: '/skills', component: <SkillsPage />, isGridLayout: true },
    { path: '/off', component: <OffScreen />, isGridLayout: false },
    { path: '/resume', component: <RedirectToResume />, isGridLayout: false },
    { path: '*', component: <NotFound />, isGridLayout: false },
  ];

  return (
    <>
      <Router>
        <Routes>

          {urls.map((url, index) => {
            return (
              <Route key={`url ${index}`} path={url.path} element={
                <Layout isGridLayout={url.isGridLayout}>
                  {url.isListLayout ? <ItemListPage array={url.array} /> : url.component}
                </Layout>
              } />
            )
          })}

        </Routes>
      </Router>
      {/* <span>Happily crafted by <a href="https://linktr.ee/ayanalimevv" className='underline' target='_blank'>@ayanalimevv</a> 💖</span> */}
    </>
  );
};

export default App;
