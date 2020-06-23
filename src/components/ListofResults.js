import React, { Component } from 'react'
import ResultCard from './ResultCard'

class ListofResults extends Component {

    generateCards = () => {
        console.log('props', this.props.results);
        
        let userResults = this.props.results
        return userResults.map(userResult => {
            console.log('key:', userResults.indexOf(userResult));
            
            return <ResultCard
                key={userResults.indexOf(userResult)}
                resultNumber={userResults.indexOf(userResult)} 
                result={userResult}
                />
        })
    }


    render(){
        return(
            <div>
                <h2>List of results</h2>
                {this.props.results.length > 0 ? this.generateCards() : <p>You have not taken the assement yet.</p>}
            </div>
        )
    }

}

export default ListofResults