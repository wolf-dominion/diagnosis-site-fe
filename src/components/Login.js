import React, {Component} from 'react'
import { Form, Button} from "react-bootstrap";


class Login extends Component {
    state = {
        username: "",
        password: "",
        error: ""
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // const usersURL = 'http://localhost:3000/login'
        const usersURL = 'https://guarded-atoll-24261.herokuapp.com/login'
        fetch(usersURL, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(response => {
            if(response.status === 200) {
                return response.json()
            } else if(response.status === 401) {
                throw new Error("Log in failed")
            }
        })
        .then(result => {
            localStorage.setItem("token", result.token)
            this.props.changeLoggedinStatus()

        })
        .catch(error => this.setState({error: error.message}))
    }

    render(){
        const {username, password} = this.state
        return(
                <Form className="auth" onSubmit={this.handleSubmit}>
                    <Form.Group className="login" onSubmit={this.handleSubmit}>
                        <Form.Label>Login:</Form.Label>
                        {this.state.error ? <p>{this.state.error}</p> : null}

                        
                        <Form.Control
                            type="text"
                            name="username"
                            value={username}
                            placeholder="username"
                            onChange={this.handleChange}/>
                

                        <Form.Control
                            classname="form-control"
                            type="password"
                            name="password"
                            value={password}
                            placeholder="password"
                            onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" value="login">
                        Login
                    </Button>
                </Form>
            )
        }
    }

export default Login