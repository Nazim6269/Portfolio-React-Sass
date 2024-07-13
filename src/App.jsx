import { useState } from "react";
import "./app.scss";
import Contact from "./Components/contact/Contact";
import Demo from "./Components/demo/Demo";
import Footer from "./Components/footer/Footer";
import Intro from "./Components/intro/Intro";
import Projects from "./Components/projects/Projects";
import Skills from "./Components/skills/Skills";
import Topbar from "./Components/topbar/Topbar";
import Work from "./Components/work/Work";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      {/* <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
      <div className="section">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Intro />
        <Projects />
        <Work />
        <Skills />
        <Contact />
        <Footer />
        <Demo />
      </div>
    </div>
  );
}

export default App;
