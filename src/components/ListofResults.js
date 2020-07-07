import React, { Component } from 'react'
import ResultCard from './ResultCard'

class ListofResults extends Component {

    generateCards = () => {        
        let userResults = this.props.results
        return userResults.map(userResult => {            
            return <ResultCard
                key={userResults.indexOf(userResult)}
                resultNumber={userResults.indexOf(userResult)} 
                result={userResult}
                username={this.props.username}
                />
        })
    }

    render(){
        return(
            <div>
                {this.props.results.length > 0 ? <div className="card-columns"> {this.generateCards()} </div> : <p>You have not taken the assement yet.</p>}
            </div>
        )
    }

}

export default ListofResults