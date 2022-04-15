import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ShowProject from "./components/ShowProject";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/showproject" element={<ShowProject />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
