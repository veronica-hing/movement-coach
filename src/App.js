import logo from './logo.svg';
import './App.css';
import{Redirect, Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';
import NotFound from './components/notFound'; 
import Home from './components/home';
import Workout from './components/workout';
import Calendar from './components/calendar';
import About from './components/about';
import Faq from './components/faq';
import NavBar from './components/navbar';

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <NavBar/>
        <main className = 'container'>
          <Switch>
            <Route path = '/home' component = {Home}/>
            <Route path = '/workout' component = {Workout}/>
            <Route path = '/calendar' component = {Calendar}/>
            <Route path = '/about' component = {About}/>
            <Route path = '/faq' component = {Faq}/>
            <Route path = '/not-found' component = {NotFound}/>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
