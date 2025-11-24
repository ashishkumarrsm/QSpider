import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./components/CRUD/Home";
import Create from "./components/CRUD/Create";
import Read from "./components/CRUD/Read";
import Update from "./components/CRUD/Update";

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
