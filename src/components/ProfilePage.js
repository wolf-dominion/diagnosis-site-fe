import React, { Component } from 'react'
import ListofResults from './ListofResults'
import { Tab, Button, Row, Col, Nav} from "react-bootstrap";
import ChangeUsernameForm from './ChangeUsernameForm';

class ProfilePage extends Component{

    state = {
        displayForm: false
    }

    getProgress = () => {
        let allResults = this.props.results

        if (allResults.length > 0){
            let addedNum = 0
            let resultsLength = allResults.length
            allResults.map(resultObject => {
                for (const [key, value] of Object.entries(resultObject)) {
                    if (Number.isInteger(value)){
                        if (key !== "user_id" && key !== "id"){
                            // console.log(`${key}: ${value}`)
                            addedNum += value
                        }
                    } 
                  }
            })
            return `Average Score: ${(addedNum/resultsLength).toFixed(2)} out of 9`
        }
        else {
            return `You have not taken the assessment, click "New Case" to begin.`
        }
    }

    handleClick = () => {
        this.setState({displayForm: !this.state.displayForm})
    }

    render(){
        return(
            <div>
                <h1>Welcome, {this.props.username}</h1>
                <Button className="new-case">➕  New Case</Button>

                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Progress</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Cases</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Account</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <p>{this.getProgress()}</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <ListofResults results={this.props.results}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <h2>Account info</h2>
                                {this.state.displayForm ? < ChangeUsernameForm displayForm={this.handleClick}/>: null}
                                <p>Username: {this.props.username} <Button onClick={this.handleClick} >Edit</Button></p>
                                <p>Email: {this.props.email} <Button onClick={this.handleClick} >Edit</Button></p>
                                <p>Password: <Button onClick={this.handleClick} >Edit</Button></p>
                                <p>Close account <Button onClick={this.handleClick} >Edit</Button></p>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                    </Tab.Container>
            </div>
        )
    }
}

export default ProfilePage