import React, { Component } from 'react'

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Authenticate from './components/Authenticate'

import SimulationPage from './components/SimulationPage'
import ContactPage from './components/ContactPage'
import ProfilePage from './components/ProfilePage'
import HomePage from './components/HomePage'
import Header from './components/Header'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


class App extends Component{
  state = {
    loggedIn: false
  }

  componentDidMount(){
    this.isLoggedIn()
  }

  changeLoggedinStatus = () => {
    if (this.state.loggedIn === true){
      this.setState({loggedIn: false})
      this.clearStorage()
    }
    if (this.state.loggedIn === false){
      this.setState({loggedIn: true})
    }
  }

  clearStorage = () => {
    localStorage.clear()
  }

  isLoggedIn = () => {
    const resultsURL = 'http://localhost:3000/results'
    fetch(resultsURL, {
      headers: {
        'authorization': `Bearer ${localStorage.token}`}
    })
    .then(response => {      
      if (response.status === 200){
        this.setState({loggedIn: true})
        return response.json()
      }
    })
  }

  render(){
    const {loggedIn} = this.state
    
    return (
      < div className="site">
        
      <Router>
        <Header loggedIn={loggedIn} changeLoggedinStatus={this.changeLoggedinStatus}/>

        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/ProfilePage'>
          <ProfilePage removeFave={this.removeFave} faves={this.state.fm}/>
        </Route>
        <Route path='/SimulationPage'>
          <SimulationPage />
        </Route>
        <Route path='/ContactPage'>
          <ContactPage />
        </Route>
        <Route  path="/Authenticate"
          render={(routerProps)=> {
            return (
              <>
                { this.state.loggedIn
                  ? <Redirect to='/' />
                  : <Authenticate
                  {...routerProps}
                  loggedIn={loggedIn} 
                  changeLoggedinStatus={this.changeLoggedinStatus}/>
                }
              </>
            )
          }}
        />
      </Router>
          </div>
    )
  }
}

export default App;