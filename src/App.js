import React, { Component } from 'react'

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Authenticate from './components/Authenticate'

import SimulationPage from './components/SimulationPage'
import ContactPage from './components/ContactPage'
import ProfilePage from './components/ProfilePage'
import HomePage from './components/HomePage'
import Header from './components/Header'
import Signup from './components/Signup'

import './App.scss'

class App extends Component{
  state = {
    loggedIn: false,
    user_id: 0,
    username: "",
    email: "",
    password: "",
    results: []
  }

  componentDidMount(){
    this.isLoggedIn()
  }

  changeLoggedinStatus = () => {
    if (this.state.loggedIn === true){
      this.setState({loggedIn: false})
      this.setState({user_id: 0})
      this.setState({results: []})
      this.clearStorage()
    }
    if (this.state.loggedIn === false){
      this.setState({loggedIn: true})
      this.getResults()
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
        this.getResults()
        return response.json()
      }
    })
  }

  getResults = () => {
    const resultsURL = 'http://localhost:3000/results'
    fetch(resultsURL, {
      method: 'GET',
      headers: {'content-type':'application/json',
                'authorization': `Bearer ${localStorage.token}`}
    })
    .then(parseJSON)
    .then(this.saveToState)
    .catch(error => {
      console.error(error)
    })
    
    function parseJSON(response){
    return response.json()
    }
  }

  saveToState = (response) => {
    this.setState({results: response.results})
    this.setState({user_id: response.user_id})
    this.getUserInfo()
  }

  getUserInfo = () => {
    const userURL = `http://localhost:3000/users/${this.state.user_id}`
    fetch(userURL, {
      method: 'GET',
      headers: {'content-type':'application/json',
                'authorization': `Bearer ${localStorage.token}`}
    })
    .then(parseJSON)
    .then(this.saveUserInfoToState)
    .catch(error => {
      console.error(error)
    })
    
    function parseJSON(response){
    return response.json()
    }
  }

  saveUserInfoToState = (response) => {
    this.setState({username: response.username})
    this.setState({email: response.email})
    this.setState({password: response.password_digest})
  }

  render(){
    const {loggedIn, user_id, username, email, password, results} = this.state
    
    return (
      
      <Router>
        <Header loggedIn={loggedIn} changeLoggedinStatus={this.changeLoggedinStatus}/>
        <div className="app">

        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path="/Signup">
          <div className="authenticate">
            <Signup />
          </div>
        </Route>
        <Route  path="/ProfilePage"
          render={(routerProps)=> {
            return (
              <>
                { this.state.loggedIn
                  ? <ProfilePage getResults={this.getResults} changeLoggedinStatus={this.changeLoggedinStatus} isLoggedIn={this.isLoggedIn} results={results} user_id={user_id} username={username} email={email} password={password}/>
                  : <Authenticate
                  {...routerProps}
                  loggedIn={loggedIn}
                  changeLoggedinStatus={this.changeLoggedinStatus}/>
                }
              </>
            )
          }}
        />
        <Route  path="/SimulationPage"
          render={(routerProps)=> {
            return (
              <>
                { this.state.loggedIn
                  ? <SimulationPage />
                  : <Authenticate
                  {...routerProps}
                  loggedIn={loggedIn}
                  changeLoggedinStatus={this.changeLoggedinStatus}/>
                }
              </>
            )
          }}
        />
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
    </div>
      </Router>
    )
  }
}

export default App;