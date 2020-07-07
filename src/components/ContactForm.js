import React, { Component } from 'react'
import { Form, Button} from "react-bootstrap";

class ContactForm extends Component{

    state = {
        name: "",
        email: "",
        message: ""
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = () => {
        
    }

    render() {
        const {name, email, message} = this.state
        return(
            <Form className="auth" onSubmit={this.handleSubmit}>
            <Form.Group controlId="formUpdateUserInfo">
                <Form.Label>Contact me:</Form.Label>
                <Form.Control 
                    tpye="text"
                    name="name"
                    value={name}
                    placeholder="name"
                    onChange={this.handleChange}/>
                <Form.Control 
                    tpye="text"
                    name="email"
                    value={email}
                    placeholder="email"
                    onChange={this.handleChange}/>
                <Form.Control
                    tpye="text"
                    name="message"
                    value={message}
                    placeholder="Write message here."
                    onChange={this.handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                send
            </Button>
            </Form>
        )
    }
}
export default ContactForm