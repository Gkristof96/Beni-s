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
import Profile from './pages/Profile';
import SideBar from './components/SideBar';
import { CartProvider } from './contexts/cartContext';
import { AuthProvider } from './contexts/authContext';

function App() {
  const [isSideBarOpen, setOpen] = useState(false)
  return (
    <>
      <CartProvider>
        <Router>
          <AuthProvider>
            <Header/>
          </AuthProvider>
          <Nav setOpen={setOpen}/>
          <SideBar isSideBarOpen={isSideBarOpen} setOpen={setOpen}/>
          
          <Switch>
            <Route
              path="/"
              exact
              component={Home}
            />
            <Route
              path="/products"
              exact
              component={Products}
            />
            <Route path='/gyik' component={Gyik} />
            <Route path='/product/:id' component={Product} />
            <Route path='/contact' component={Contact} />
            <Route path='/profile' component={Profile} />
              </Switch>
              <Footer />
        </Router>
      </CartProvider> 
    </>
  );
}

export default App;
