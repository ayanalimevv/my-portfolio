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
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  console.log(location.pathname
  );

  return (
    <>
      <div className='flex justify-center items-center min-h-[90vh]'>
        <div className="mockup-browser bg-base-300 border">
          <div className="mockup-browser-toolbar">
            <div className="input">{`ayanali.com`}</div>
          </div>
          {/* {!excludedRoutes.includes(location.pathname) && */}
          <div className='flex gap-6 pb-4 px-4 pt-2'>
            {location.pathname === "/off" || <>
              <img onClick={() => history.go(-1)} className='cursor-pointer hover:opacity-80 hover:scale-95 transition-all duration-200' src="./back.svg" width={15} height={15} alt="" />

              <div className="tooltip ml-auto tooltip-left" data-tip="Shut Down">
                <a href={'/off'}> <img className='cursor-pointer hover:opacity-80 hover:scale-95 transition-all duration-200' src="./off.svg" width={15} height={15} alt="" />
                </a>
              </div>
            </>}
          </div>
          {/* } */}

          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/socials" element={<Socials />} />
              <Route path="/projects" element={<ProjectPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/off" element={<OffScreen />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
};

export default App;
