
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Accueil from "./Pages/Accueil/accueil";
import Agence from "./Pages/Agence/agence";
import GSAP from "./Pages/GSAP/Gsap";
import Css from "./Pages/Csspages/Css"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={<Accueil/>}>
          
        </Route>
        
        <Route path="/agence" element={<Agence/>}>
        </Route>
        <Route  path="/gsap" element={<GSAP/>}>
          
        </Route>
        <Route path="/css" element={<Css/>}>
          
        </Route>
        <Route path="/references">
         
        </Route>
        <Route path="/contact">
         
        </Route>
        
        <Route>
          
        </Route>
        
        
      </Routes>
    </Router>
  );
}

export default App;
