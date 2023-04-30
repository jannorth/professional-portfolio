import React from "react";
import "bulma/css/bulma.min.css";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
// import Colors from "./colors";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const backgroundImage = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  return (
    <div className="App" style={backgroundImage}>
      <BrowserRouter>
        <Header backgroundImage={backgroundImage} />
          <Routes>
            <Route
              path="/"
              element={<About backgroundImage={backgroundImage} />}
            />{" "}
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route
              path="/Resume"
              element={<Resume backgroundImage={backgroundImage} />}
            />
            <Route
              path="/Contact"
              element={<Contact backgroundImage={backgroundImage} />}
            />
          </Routes>
        <Footer backgroundImage={backgroundImage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
