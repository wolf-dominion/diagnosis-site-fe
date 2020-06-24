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
    loggedIn: false,
    user_id: 0,
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
  }

  render(){
    const {loggedIn, username, results} = this.state
    
    return (
      < div className="site">
        
      <Router>
        <Header loggedIn={loggedIn} changeLoggedinStatus={this.changeLoggedinStatus}/>

        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/ProfilePage'>
          <ProfilePage username={username} results={results}/>
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