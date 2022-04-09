import { Routes , Route} from "react-router-dom";
import './App.css';
import Home from "./Pages/HomePage/Home";
import About from "./Pages/AboutPage/About";
import Contact from "./Pages/ContactPage/Contact";
import Work from "./Pages/Works/Work";
function App() {
  return (
    <>
      {/* here in new react-router-dom version switch is replaced by Routes  */}
          <Routes >
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/works" element={ <Work/> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/contact" element={ <Contact /> } />
          </Routes >
    </>
  );
}

export default App;
