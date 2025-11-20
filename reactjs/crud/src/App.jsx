import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import "./App.css"
function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create" element={<Create/>}/>
            <Route path="/read/:id" element={<Read/>}/>
            <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
