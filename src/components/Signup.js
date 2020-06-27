import React, {Component} from 'react'
import { Form, Button} from "react-bootstrap";

class Signup extends Component {

    state = {
        username: "",
        email: "",
        password: "",
        // error: ""
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        const usersURL = 'http://localhost:3000/users'
        fetch(usersURL, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({user: this.state})
        }).then(parseJSON)
        .then(result => {
            if (result.message === 1){
                throw new Error("Username already taken") 
            }
            else {
                window.alert("This post was successfully created.")
                return result
            }
        }).then(result => {
            if ('token' in result){
                localStorage.setItem("token", result.token)
                this.props.changeLoggedinStatus()
            }
        }).catch(error => this.setState({error: error.message}))

        function parseJSON(response){
            return response.json()
        }
    }

    render(){
        const {username, email, password} = this.state
        
        return(
            <div>
                
                <Form className="signup" onSubmit={this.handleSubmit} style={{"width" : "50%"}}>
                    <Form.Group controlId="formUpdateUserInfo">
                        <Form.Label>Signup:</Form.Label>
                        {this.state.error ? <p>{"Username already taken"}</p> : null}
                        <Form.Control 
                            tpye="text"
                            name="username"
                            value={username}
                            placeholder="username"
                            onChange={this.handleChange}/>
                        <Form.Control 
                            tpye="text"
                            name="email"
                            value={email}
                            placeholder="email"
                            onChange={this.handleChange}/>
                        <Form.Control
                            tpye="password"
                            name="password"
                            value={password}
                            placeholder="password"
                            onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Signup
                    </Button>
                    {/* <input type="submit" value="signup"></input> */}
                </Form>
            </div>
        )
    }
}

export default Signup