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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq_SAqXN6PnPp53dcrTKcuXQbEFtTi8hs",
  authDomain: "etc-31032003.firebaseapp.com",
  projectId: "etc-31032003",
  storageBucket: "etc-31032003.appspot.com",
  messagingSenderId: "751434193660",
  appId: "1:751434193660:web:9d0ca8a15f0f9bd5b1d579",
  measurementId: "G-BYSCV7BD9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
