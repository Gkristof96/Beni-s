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
import NotFound from './pages/404'
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
                  <Route path='/product' component={Product} />
                  <Route path='/contact' component={Contact} />
                  <Route path='/profile' component={Profile} />
                  <Route component={NotFound} />
                </Switch>
              <Footer />
              </AuthProvider>
          </Router>
      </CartProvider> 
    </>
  );
}

export default App;
