import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Index from './components/Index/Index'
import Contact from './components/Contact/Contact'
import Contacts from './components/Contacts/Contacts'
import Socialmedia from './components/SocialMedia/Socialmedia'
import Footer from './components/Footer/Footer'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Notfound from './components/Notfound/Notfound';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
          <Navbar />
          <Route exact={true} path='/' component={Index}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/about' component={About}/>
          <Route path='/codes' component={Notfound}/>
          <Contacts />
          <Socialmedia />
          <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
