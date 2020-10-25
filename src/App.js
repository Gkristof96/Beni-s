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
import Profile from './pages/Profile';

function App() {
  const [authVisible, setVisible] = useState(false)
  const [basket, setBasket] = useState([]);
  console.log(basket)
  return (
    <>
      <Router>
        {authVisible ? <Authentication setVisible={setVisible} /> : null}
        <Header basket={basket} setBasket={setBasket} setVisible={setVisible}/>
        <Nav />
        
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                {...props}
                setBasket={setBasket}
                basket={basket}
              />
            )}
          />
          <Route
            path="/products"
            exact
            render={(props) => (
              <Products
                {...props}
                setBasket={setBasket}
                basket={basket}
              />
            )}
          />
          <Route path='/gyik' component={Gyik} />
          <Route path='/product' component={Product} />
          <Route path='/contact' component={Contact} />
          <Route path='/profile' component={Profile} />
        </Switch>
        <Footer />
      </Router>
        
    </>
  );
}

export default App;
