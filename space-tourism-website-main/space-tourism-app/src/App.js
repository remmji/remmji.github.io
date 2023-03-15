
import { Routes, Route } from "react-router-dom"
import Destination from "./Destination";
import Home from "./Home"
import Crew from "./Crew";
import Technology from "./Technology";

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/Destination' element={<Destination/>}/>
      <Route path='/Crew' element={<Crew/>}/>
      <Route path='/Technology' element={<Technology/>}/>
  </Routes>
  </>
  );
}

export default App;
