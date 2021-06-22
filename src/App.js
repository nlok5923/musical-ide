import Home from './pages/Home/index'
import IDE from './pages/IDE/index'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="components">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ide" component={IDE} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
