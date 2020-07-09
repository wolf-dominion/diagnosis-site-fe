import React, { Component } from 'react'
import ContactForm from "./ContactForm";
// import axios from 'axios';


class ContactPage extends Component{

    // state = {
    //     name: '',
    //     message: '',
    //     email: '',
    //     sent: false,
    //     buttonText: 'Send Message'
    // }

    // formSubmit = (e) => {
    //     e.preventDefault()
      
    //     this.setState({
    //         buttonText: '...sending'
    //     })
      
    //     let data = {
    //         name: this.state.name,
    //         email: this.state.email,
    //         message: this.state.message
    //     }
        
    //     axios.post('API_URI', data)
    //     .then( res => {
    //         this.setState({ sent: true }, this.resetForm())
    //     })
    //     .catch( () => {
    //       console.log('Message not sent')
    //     })
    //   }

    //   resetForm = () => {
    //     this.setState({
    //         name: '',
    //         message: '',
    //         email: '',
    //         buttonText: 'Message Sent'
    //     })
    // }

    render(){
        return(
            <div className="form-holder">
                <div className="contact-form-container">
                   <ContactForm />
                </div>
            </div>
        )
    }
}

export default ContactPage