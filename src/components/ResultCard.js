import React from 'react'

function ResultCard(props){

    console.log('props in card', props);

    const {empathy, communication, sharedecision} = props.result

    function getOverallScore() {
        let overallScore = (empathy + communication + sharedecision)/3
        return overallScore.toFixed(2)
    }

    return (
        <div>
            <h3>Result #{props.resultNumber + 1}</h3>
            <p>|Summary|</p>
            <p>Empathy: {props.result.empathy}</p>
            <p>Communication: {props.result.communication}</p>
            <p>Shared-Decision Making: {props.result.sharedecision}</p>
            <p>Overall Score: {getOverallScore()}</p>
            <button>View Analysis</button>
        </div>
    )
}

export default ResultCard