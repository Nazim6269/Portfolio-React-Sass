import { useState } from "react";
import "./app.scss";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Intro from "./Components/intro/Intro";
import Projects from "./Components/portfolio/Projects";
import Testimonial from "./Components/testimonial/Skills";
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
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
