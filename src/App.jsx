import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Home from './pages/Home';
import Guide from './pages/Guide';
import ResearchOrganization from './pages/ResearchOrganization';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/research" element={<ResearchOrganization />} />
    </Routes>
  );
};

export default App;
