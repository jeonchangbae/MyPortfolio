import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ShowProject from "./components/ShowProject";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/showproject" element={<ShowProject />}/>
      </Routes>
    </BrowserRouter>
      
    </>    
  );
}

export default App;
