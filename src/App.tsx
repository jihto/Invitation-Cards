import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./layouts/Navbar" 

function App() { 
  return ( 
    <Routes location={location}>
      <Route path="/" element={<Navbar />}>
          <Route path="" index element={<Home />} /> 
      </Route>
    </Routes>
  )
}

export default App
