import React, { Component } from 'react'
import ListofResults from './ListofResults'
// import Analysis from './Analysis'

class ProfilePage extends Component{


    render(){
        
        return(
            <div>
                <h1>Profile page</h1>
                <ListofResults results={this.props.results}/>
            </div>
        )
    }
}

export default ProfilePage