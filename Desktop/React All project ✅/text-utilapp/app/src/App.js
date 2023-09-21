//#042743
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Contact from "./components/Contact";
import React, { useState } from "react";
import Alert from "./components/Alert";


// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      // setMode is function which is used to call in navbar component whether switch is light or dark
      setMode("dark");
      document.body.style.backgroundColor = "#414141";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#E1ECC8";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
    
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}

      {/* toggleMode function is used for enable dark mode sentence */}
      <Router>
        {/* props passed title mode and toggleMode */}
        <Navbar title="TextUtilsApp"
          mode={mode}
          toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          
          {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Routes>
            {/* <Route path="/home" />
            <Route path="/about" element={<About />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<TextForm
              showAlert={showAlert}
              heading="Enter the text "
              mode={mode} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
