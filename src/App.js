import Home from './pages/Home/index'
import IDE from './pages/IDE/index'
import Player from './components/Player/index'
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="components">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ide" component={IDE} />
          <Route exact path="/player" component={Player} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
