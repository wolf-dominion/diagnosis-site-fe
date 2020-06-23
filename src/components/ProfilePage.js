import React, { Component } from 'react'
import ListofResults from './ListofResults'
import { Tab, Button, Row, Col, Nav} from "react-bootstrap";

class ProfilePage extends Component{

    getProgress = () => {
        let allResults = this.props.results

        if (allResults.length > 0){
            let addedNum = 0
            let resultsLength = allResults.length
            allResults.map(resultObject => {
                for (const [key, value] of Object.entries(resultObject)) {
                    if (Number.isInteger(value)){
                        if (key !== "user_id" && key !== "id"){
                            console.log(`${key}: ${value}`)
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

    render(){
        
        return(
            <div>
                <h1>Profile page</h1>
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
                                <p>account info</p>
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