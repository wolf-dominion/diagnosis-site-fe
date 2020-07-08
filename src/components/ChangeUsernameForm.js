import React, { Component } from 'react'
import { Form, Button} from "react-bootstrap";

class ChangeUsernameForm extends Component{

    state = {
        username: "",
        email: "",
        password: "",
        error: ""
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const user = {}

        if (this.state.username !== ""){
            user["username"] = this.state.username
        }
        if (this.state.email !== ""){
            user["email"] = this.state.email
        }
        if (this.state.password !== ""){
            user["password"] = this.state.password
        }

        // const userURL = `http://localhost:3000/users/${this.props.userInfo.user_id}`
        const userURL = `https://guarded-atoll-24261.herokuapp.com/${this.props.userInfo.user_id}`
        fetch(userURL, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(user)
        }).then(response => {
            if(response.status === 200) {
                this.props.userInfo.isLoggedIn()
                this.props.displayForm()
                window.alert("Successfully Updated!")
            } else if(response.status === 401) {
                throw new Error("Patch failed")
            }
        })
        .catch(error => this.setState({error: error.message}))
    }

    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formUpdateUserInfo">
                        <Form.Label>Update User info</Form.Label>
                            <Form.Control 
                                type="username" 
                                name="username"
                                placeholder={this.props.userInfo.username} 
                                onChange={this.handleChange}/>
                            <Form.Control 
                                type="email" 
                                name="email"
                                placeholder={this.props.userInfo.email}
                                onChange={this.handleChange}/>
                            <Form.Control 
                                type="password" 
                                name="password"
                                placeholder="password" 
                                onChange={this.handleChange}/> 
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button variant="primary" className="btn btn-danger" onClick={this.props.displayForm}>
                        x
                    </Button>
                </Form>
            </div>
        )   
    }
}

export default ChangeUsernameForm