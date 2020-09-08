import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/';
import News from './pages/News/';
import Profile from './pages/Profile/';
import Login from './pages/Login/';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <nav>
            <ul className="App-menu">
              <li>
                <Link to="/">На главную </Link>
              </li>
              <li>
                <Link to="/news">Новости</Link>
              </li>
              <li>
                <Link to="/profile">Профиль</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
