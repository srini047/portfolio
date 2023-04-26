import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

// Routes
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Blogs from "./routes/Blogs";
import About from "./routes/About";
import Contact from "./routes/Contact";

function App() {
  return (
    <div>
      <AnimatedCursor
        color="255, 0, 0"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid #fff",
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
