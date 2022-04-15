import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Skill from "./components/Skill";
import ShowProject from "./components/ShowProject";
import Contact from "./components/Contact";
import Back from "./components/Back";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/showproject" element={<ShowProject />}/>
        <Route path="/skill" element={<Skill />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/back" element={<Back />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
