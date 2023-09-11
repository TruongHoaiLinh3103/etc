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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCErSRpk-Ypf8GFqa9wq0MYLCcfEJpn5zo",
  authDomain: "etc2023-b2708.firebaseapp.com",
  projectId: "etc2023-b2708",
  storageBucket: "etc2023-b2708.appspot.com",
  messagingSenderId: "300103695428",
  appId: "1:300103695428:web:64809cf203330c3da45011",
  measurementId: "G-91WKG5CC4F"
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
