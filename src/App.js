import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import { MendableFloatingButton } from "@mendable/search";

// Routes
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Blogs from "./routes/Blogs";
import About from "./routes/About";
import Contact from "./routes/Contact";

// Mendable constants
const style = { darkMode: true, accentColor: "#000" };

const floatingButtonStyle = {
  darkMode: true,
  backgroundColor: "#fff",
};

const icon = <img src="https://user-images.githubusercontent.com/81156510/248205105-91c18b88-8ef4-4ff1-8e5f-d63d586af1ab.svg" alt="chatbot icon"/>

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

      <MendableFloatingButton
        anon_key="7f3dd8c7-e7d7-4c93-aab3-4ae284cbc281"
        style={style}
        floatingButtonStyle={floatingButtonStyle}
        icon={icon}
        dialogPlaceholder="Ask anything about Sriniketh..."
        privacyDisclaimer="Responses are AI generated based on data provided. If anything is ambiguous or unclear please feel free to contact Sriniketh."
        _shouldStream={false}
        showPopup={false}
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
