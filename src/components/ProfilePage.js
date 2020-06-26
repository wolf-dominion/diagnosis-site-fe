import React, { Component } from 'react'
import ListofResults from './ListofResults'
import { Tab, Button, Row, Col, Nav, Modal, CardDeck} from "react-bootstrap";
import ChangeUsernameForm from './ChangeUsernameForm';
import ChartPracticeApp from './ChartPracticeApp';

class ProfilePage extends Component{

    state = {
        displayForm: false,
        showCloseAccount: false
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

    handleRemoveAccountClick = () => {
        console.log('props: ', this.props);
        this.setState({showCloseAccount: !this.state.showCloseAccount})
    }

    deleteAccount = () => {
        const userURL = `http://localhost:3000/users/${this.props.user_id}`
        fetch(userURL, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.token}`}
        })
        .then(response => {      
            if (response.status === 200){
                console.log('response: ', response)
                this.props.changeLoggedinStatus()
            }
        })
    }

    render(){
        return(
            <div className="main-render-div">
                <h1>Welcome, {this.props.username}</h1>
                <Button className="new-case">+ New Case</Button>

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
                                <ChartPracticeApp userInfo={this.props}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <CardDeck>
                                    <ListofResults results={this.props.results}/>
                                </CardDeck>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <h2>Account info</h2>
                                {this.state.displayForm ? < ChangeUsernameForm userInfo={this.props} displayForm={this.handleClick} />: null}
                                <p>Username: {this.props.username}</p>
                                <p>Email: {this.props.email}</p>
                                <Button onClick={this.handleClick} >Edit account info</Button>
                                <br></br>
                                <br></br>
                                <Button onClick={this.handleRemoveAccountClick} >Close account</Button>
                                <Modal show={this.state.showCloseAccount} >
                                    <Modal.Header>
                                        <Modal.Title>Warning</Modal.Title>
                                        
                                    </Modal.Header>
                                    <Modal.Body>
                                        Are you sure you want to permanently delete your account and all results?
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button className="btn btn-danger" onClick={this.deleteAccount}>Delete my account permanently</Button>
                                        <Button onClick={this.handleRemoveAccountClick}>No, take me back to my account page</Button>
                                    </Modal.Footer>
                                </Modal>
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