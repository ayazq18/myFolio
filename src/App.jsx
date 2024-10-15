import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavHorizontal from './NavBar/nav-horizontal';
import SpeedDialer from './components/speedDial';
import Home from './section/home';
import About from './section/about';
import TechSkills from './components/techSkills';
import MyProject from './components/myProject';


function App() {
  return (
    <Router>
      <Box>
        <NavHorizontal />
        <Box
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 1000,
          }}
        >
          <SpeedDialer />
        </Box>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech" element={<TechSkills />} />
          <Route path="/projects" element={<MyProject />} />

        </Routes>
      </Box>
    </Router>
  );
}

export default App;
