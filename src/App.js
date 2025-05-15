import { BrowserRouter } from 'react-router-dom';
import WelcomePage from './Components/Welcome/WelcomePage';
import AboutMe from './Components/AboutMe/AboutMe';
import Header from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import ContactMe from './Components/ContactMe/ContactMe';
import Timeline from './Components/Timeline/Timeline';
import './index.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="center">
        <Header />
        <WelcomePage />
        <AboutMe />
        <Timeline />
        <Projects />
        <ContactMe />
      </div>
    </BrowserRouter>
  );
}

export default App;
