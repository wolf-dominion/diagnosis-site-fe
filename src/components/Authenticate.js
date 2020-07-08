import React, { Component } from 'react'
import {Button} from "react-bootstrap";

import Login from './Login'
import Signup from './Signup'

class Authenticate extends Component {

    state = {
        isLogin: true
    }
    
    toggle = () => {
        this.setState({isLogin: !this.state.isLogin})
    }

    componentDidMount(){
        this.checkPropsForToggle()
    }

    checkPropsForToggle = () => {
        if (this.props.displaySignup) {
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
                        <Login 
                            changeLoggedinStatus={this.props.changeLoggedinStatus}/> 
                    : 
                        <Signup 
                            changeLoggedinStatus={this.props.changeLoggedinStatus}/>
                }
                <div className="auth-button">
                    <Button onClick={this.toggle}>
                        {isLogin ? "Sign Up?" : "Login?"}
                    </Button>
                </div>
            </div>
        )
    }
}

export default Authenticate