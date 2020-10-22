import React from 'react';
import './css/style.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header'
import Gyik from './pages/GYIK';
import Home from './pages/Home';
import Products from './pages/Products'
import Contact from './pages/Contact'
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/gyik' component={Gyik} />
          <Route path='/products' component={Products} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
        
    </>
  );
}

export default App;
