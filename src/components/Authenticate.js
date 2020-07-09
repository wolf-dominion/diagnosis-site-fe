import React, { Component } from 'react'
import {Button} from "react-bootstrap";

import Login from './Login'
import Signup from './Signup'

class Authenticate extends Component {

    state = {
        isLogin: true
    }
    
    toggle = () => {
        
        if (this.props.displaySignupState){
            // this.setState({isLogin: !this.state.isLogin})
            this.props.displaySignup()
        }
        else {
            this.setState({isLogin: !this.state.isLogin})
        }

    }

    render(){
        //console.log('props: ', this.props);
        
        const { isLogin } = this.state
        return(
            <div className="authenticate">
                {isLogin 
                    ? 
                        (this.props.displaySignupState ? <Signup displaySignup={this.props.displaySignup} displaySignupState={this.props.displaySignupState} changeLoggedinStatus={this.props.changeLoggedinStatus}/> : 
                            <Login changeLoggedinStatus={this.props.changeLoggedinStatus}/>) 
                    : 
                        <Signup 
                            changeLoggedinStatus={this.props.changeLoggedinStatus}/>
                }
                <div className="auth-button">
                    <Button onClick={this.toggle}>
                        {isLogin ?
                            (this.props.displaySignupState ? "Login" : "Sign Up?") 
                            : 
                                "Login?"}
                    </Button>
                </div>
            </div>
        )
    }
}

export default Authenticate