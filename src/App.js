import { BrowserRouter } from 'react-router-dom';
import WelcomePage from './Components/Welcome/WelcomePage';
import AboutMe from './Components/AboutMe/AboutMe';
import Header from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import './index.scss';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <Header/>
      <WelcomePage/>
      <AboutMe/>
      <Projects/>
    </BrowserRouter>
  );
}

export default App;
