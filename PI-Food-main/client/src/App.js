import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar"
import  {DetailPage, FormPage, Home,LandingPage} from './views/index'
function App() {
 
 const {pathname }= useLocation();
  return (
    <div className="App">

     { pathname !== "/" && <NavBar/>}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-recipe" element={<FormPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
