
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Core/Header'
import { Children } from 'react'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Header Children ={<Home />} pages={"Home"} />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
