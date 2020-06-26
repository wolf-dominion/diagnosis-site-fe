import React, { Component } from 'react'
import { Card, Button, Modal } from "react-bootstrap";
import ChartPracticeApp from './ChartPracticeApp'

class ResultCard extends Component{

    state = {
        show: false
    }

    getOverallScore = () => {
        const {empathy, communication, sharedecision} = this.props.result
        let overallScore = (empathy + communication + sharedecision)/3
        return overallScore.toFixed(2)
    }

    handleClick = () => {
        this.setState({show: !this.state.show})
    }

    handleDownload = () => {

    }

    render(){
        let userInfo = [{results: this.props.result}]
        return (
            <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Case {this.props.resultNumber + 1}</Card.Title>
                    <Card.Text>
                        Empathy: {this.props.result.empathy} <br></br>
                        Communication: {this.props.result.communication} <br></br>
                        Shared-Decision Making: {this.props.result.sharedecision} <br></br>
                        Overall Score: {this.getOverallScore()}
                    </Card.Text>
                    <Button onClick={this.handleClick} variant="primary">View Analysis</Button>
                </Card.Body>
            </Card>
            <Modal show={this.state.show} >
                <Modal.Header>
                    <Modal.Title>Hello</Modal.Title>
                    <Button className="btn btn-danger" onClick={this.handleClick}>x</Button>
                </Modal.Header>
                <Modal.Body>
                    <ChartPracticeApp userInfo={this.props}/>
                    {/* {<Analysis result={this.props.result}/>} */}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleDownload}>Download PDF</Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }
}

export default ResultCard