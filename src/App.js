import { Routes, Route, Link } from "react-router-dom";
import react, { Fragment } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Publications from "./components/Publication/pub";
import Certifications from "./components/Certificates/certificates";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Work />} />
        <Route path="/publication" element={<Publications />} />
        <Route path="/certificates" element={<Certifications />} />
      </Routes>
    </Fragment>
  );
}

export default App;
