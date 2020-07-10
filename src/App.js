import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Index from './components/Index'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts'

function App() {
  return (
    <>
      <CssBaseline></CssBaseline>
      <Route exact path="/" component={Index}></Route>
      <Route path="/resume" component={Resume}></Route>
      <Route path="/portfolio" component={Portfolio}></Route>
      <Route path="/contact" component={Contacts}></Route>
    </>
  );
}

export default App;
