import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <Switch>
  <Route exact path='/'>
      <Home/>
      </Route>
      <Route exact path='/movies'>
        <Home  type='movies'/>
      </Route>
      <Route exact path='/series'>
        <Home  type='series'/>
      </Route>

      <Route exact path='/watch'>
        <Watch/>
      </Route>
    </Switch>
    </Router>
  )
};

export default App;