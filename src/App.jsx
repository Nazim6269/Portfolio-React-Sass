import { useState } from "react";
import "./app.scss";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Intro from "./Components/intro/Intro";
import Portfolio from "./Components/portfolio/Portfolio";
import Testimonial from "./Components/testimonial/Testimonial";
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
        <Portfolio />
        <Work />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
