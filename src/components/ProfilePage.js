import React, { Component } from 'react'
import ListofResults from './ListofResults'
// import Analysis from './Analysis'

class ProfilePage extends Component{

    getProgress = () => {
        // code to gather overall progress score. average of each of the 3 components, then average of those
    }

    render(){
        
        return(
            <div>
                <h1>Profile page</h1>
                <h2>Overall Progress: {}</h2>
                <ListofResults results={this.props.results}/>
            </div>
        )
    }
}

export default ProfilePage