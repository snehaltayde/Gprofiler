import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/home';
import Notfound from './components/pages/Notfound';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/alertState';


const App = ()=> {
 

    return (
      <GithubState>
        <AlertState>
      <Router> 
      <div className="App">
      <Navbar  title ="Github Profiler" icon="fa fa-github"/>
      <div className="container">
      <h4 className="text-center"> Github Finder Tool</h4>
      <Alert />
      <Switch>
      <Route exact path='/' component = {Home}/>

        <Route exact path='/about' render ={props=>(
                  <Fragment> 

                    <h1>Page Page</h1>
              <About />
        </Fragment> 

        )} />

        <Route exact path='/user/:login' render ={props=>(
        <User {...props} />
        )} />

        <Route component = {Notfound}/>
      </Switch>
      
      </div>
    
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
  
  
}



export default App;
