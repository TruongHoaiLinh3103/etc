import Navbars from "../../Layouts/Navbars/Navbars";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Service from '../../Pages/Service/Service';
import News from '../../Pages/News/News';
import Recruitment from '../../Pages/Recruitment/Recruitment';
import Contact from '../../Pages/Contact/Contact';
import Ireraetc from '../../Pages/Ireraetc/Ireraetc';
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
          <Route path="/service" exact>
            <Service />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/recruitment" exact>
            <Recruitment />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/irera-etc">
            <Ireraetc />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
