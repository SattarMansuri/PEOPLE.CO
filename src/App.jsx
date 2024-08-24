import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import People from "./components/People"
import Details from "./components/Details"
function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/people" element={<People/>}/>
    <Route path="/info" element={<Details/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
