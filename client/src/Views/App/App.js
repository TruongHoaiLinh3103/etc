import Navbars from "../../Layouts/Navbars/Navbars";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Recruitment from '../../Pages/Recruitment/Recruitment';
import Contact from '../../Pages/Contact/Contact';
import Ireraetc from '../../Pages/Ireraetc/Ireraetc';
import "../../Style/Basic.css";
import '../../Style/grid.css';
import ServicePage from "../../Components/ServicePage/ServicePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbars/>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/recruitment">
            <Recruitment />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/irera-etc">
            <Ireraetc />
          </Route>
          <Route path="/:name">
            <ServicePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
