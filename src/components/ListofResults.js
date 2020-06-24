import React, { Component } from 'react'
import { CardColumns } from "react-bootstrap";
import ResultCard from './ResultCard'

class ListofResults extends Component {

    generateCards = () => {        
        let userResults = this.props.results
        return userResults.map(userResult => {            
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
                {this.props.results.length > 0 ? <CardColumns> {this.generateCards()} </CardColumns>: <p>You have not taken the assement yet.</p>}
            </div>
        )
    }

}

export default ListofResults