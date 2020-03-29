import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Webboard from './components/Webboard';
import Contactus from './components/Contactus';
import Urlnotfound from './components/Urlnotfound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">หน้าแรก</Link>
          </li>
          <li>
            <Link to="/webboard">เว็บบอร์ด</Link>
          </li>
          <li>
            <Link to="/contactus">ติดต่อเรา</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/webboard" component={Webboard} />
        <Route exact path="/contactus" component={Contactus} />
        <Route component={Urlnotfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
