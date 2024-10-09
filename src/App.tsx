// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import Socials from './pages/SocialsPage';
import ProjectPage from './pages/ProjectsPage';
import NotFound from './pages/NotFound';
import EducationPage from './pages/EducationPage';
import SkillsPage from './pages/SkillsPage';
import OffScreen from './pages/OffScreen';
import RedirectToResume from './pages/RedirectToResume';
import Layout from './pages/Layout';
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
    { path: '/education', component: <EducationPage />, isGridLayout: false },
    { path: '/skills', component: <SkillsPage />, isGridLayout: true },
    { path: '/off', component: <OffScreen />, isGridLayout: false },
    { path: '/resume', component: <RedirectToResume />, isGridLayout: false },
    { path: '*', component: <NotFound />, isGridLayout: false }
  ];

  return (
    <>
      <Router>
        <Routes>
          {urls.map(url => {
            return <Route path={url.path} element={<Layout children={url.component} isGridLayout={url.isGridLayout} />} />
          })}
        </Routes>
      </Router>
    </>
  );
};

export default App;
