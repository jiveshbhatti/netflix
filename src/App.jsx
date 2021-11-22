import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

const App = () => {
  const user = true;
  return (
    <Router>
    <Switch>
    <Route exact path='/'>
      {user ? <Home/> : <Redirect to='/register'/>}
      </Route>
    <Route exact path='/register'>
    {!user ? <Register/> : <Redirect to='/'/>}
      </Route>
      <Route exact path='/login'>
      {!user ? <Login/> : <Redirect to='/'/>}
</Route>

{user && (
<>
<Route exact path='/movies'>
        <Home  type='movies'/>
      </Route>
      <Route exact path='/series'>
        <Home  type='series'/>
      </Route>

      <Route exact path='/watch'>
        <Watch/>
      </Route>
    </>)}
    </Switch>
    </Router>
      
  )
};

export default App;