import React, {Component} from 'react'


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
        console.log('handsubmit triggered');
        
        const usersURL = 'http://localhost:3000/users'
        fetch(usersURL, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({user: this.state})
        }).then(parseJSON)
        .then(result => {
            if (result.message == 1){
                console.log('boo', result)
                throw new Error("Username already taken") 
            }
            else {
                return result
            }
        }).then(result => {
            if ('token' in result){
                localStorage.setItem("token", result.token)
                this.props.changeLoggedinStatus()
            }
            console.log('result: ', result.message.username);
            
        }).catch(error => this.setState({error: error.message}))

        function parseJSON(response){
            return response.json()
        }
    }

    render(){
        const {username, email, password} = this.state

        return(
            <form className="signup" onSubmit={this.handleSubmit}>
                <label>Signup:</label>
                {this.state.error ? <p>{"Username already taken"}</p> : null}
                <br />
                <input 
                    tpye="text"
                    name="username"
                    value={username}
                    placeholder="username"
                    onChange={this.handleChange}>
                </input>
                <br />
                <input 
                    tpye="text"
                    name="email"
                    value={email}
                    placeholder="email"
                    onChange={this.handleChange}>
                </input>
                <br />
                <input 
                    tpye="password"
                    name="password"
                    value={password}
                    placeholder="password"
                    onChange={this.handleChange}>
                </input>
                <br />
                <br />
                <input type="submit" value="signup"></input>
            </form>
        )
    }
}

export default Signup