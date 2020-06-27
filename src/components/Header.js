import React from 'react'
import { Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom'

function Header({loggedIn, changeLoggedinStatus}) {

    //console.log('loggedIn from Header: ', loggedIn);
    
    return(
            <Navbar className="w-auto p-3" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">DiagnoSIM</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="SimulationPage">Simulation</Nav.Link>
                    <Nav.Link as={Link} to="ProfilePage">My Profile</Nav.Link>
                    <Nav.Link as={Link} to="ContactPage">Contact</Nav.Link>

                    <Nav.Link 
                        onClick={loggedIn ? changeLoggedinStatus : null} 
                        as={Link} to='/Authenticate'
                        >
                        {loggedIn ? "Logout" : "Login"}
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

    )

}


export default Header