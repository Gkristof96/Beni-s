import React, { useState } from 'react';
import './css/style.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header'
import Gyik from './pages/GYIK'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Nav from './components/Nav'
import Footer from './components/footer'
import Product from './pages/Product'
import Authentication from './components/Authentication'
import Search from './components/Hero/Search';

function App() {
  const [authVisible, setVisible] = useState(false)
  return (
    <>
      <Router>
        {authVisible ? <Authentication setVisible={setVisible} /> : null}
        <Header setVisible={setVisible}/>
        <Nav />
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/gyik' component={Gyik} />
          <Route path='/products' exact component={Products} />
          <Route path='/product' component={Product} />
          <Route path='/contact' component={Contact} />
          <Route path='/test' component={Search} />
        </Switch>
        <Footer />
      </Router>
        
    </>
  );
}

export default App;
