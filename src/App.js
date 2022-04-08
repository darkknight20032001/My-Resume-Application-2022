import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import MyProjects from "./Components/MyProjects";
import SlideBar from "./Components/SlideBar";
import ContactMe from "./Components/ContactMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <SlideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/myprojects" element={<MyProjects />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
