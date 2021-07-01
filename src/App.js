import Home from "./pages/Home/index";
import IDE from "./pages/IDE/index";
import Player from "./components/Player/index";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

const App = () => {
  return (
    <div className="components">
      <Router>
        <Switch>
          <AlertProvider template={AlertTemplate} {...options}>
            <Route exact path="/" component={Home} />
            <Route exact path="/ide" component={IDE} />
          </AlertProvider>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
