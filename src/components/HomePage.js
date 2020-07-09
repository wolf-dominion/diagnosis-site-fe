import React, { Component } from 'react'
import { Button, } from "react-bootstrap";
import DoctorA from './images/doctor (1).svg'
import DoctorB from './images/doctor.svg'
import Heart from './images/cardiogram.svg'
import DocumentIcon from './images/document.svg'
import { Link } from 'react-router-dom';

class HomePage extends Component{
    constructor(props){
        super(props)

        //creates a reference for your element to use
        this.myDivToFocus = React.createRef()
     }

    handleOnClick = () => {
        //.current is verification that your element has rendered
        if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
    }

    renderAuthComponent = () => {
        console.log('render auth comp');
        this.props.displaySignup()
        return true
    }

    render(){
        
        return(
            <div id="home-page-background" ref='wrap'>
                <div className={"container-fluid p-0"}>
                    <div className="row">
                        <div id="intro-text-container" className={"col-6 slide-up"}> 
                            <h1 className={"bold-font"}>DiagnoSIM</h1>
                            <br></br>
                            <h2 className={"bold-font"}>Interpersonal Skills Simulation</h2>
                            <br></br>
                            <h5 className={"bold-font"}>Assess your communication effectiveness</h5>
                            <br></br>
                            <h5 className={"bold-font"}>Improve doctor-patient relationships</h5>
                            <br></br>
                            <h5 className={"bold-font"}>Create a healthier world</h5>
                            <div className="row subRow" id="home-page-buttons">
                                <div className="col" id="learn-more">
                                    <Button onClick={this.handleOnClick}>Learn More</Button>
                                </div>
                                <div className="col-6" id="sign-up">
                                    {/* <Button href="Signup">Sign up</Button> */}
                                        <Link className="btn btn-primary" onClick={this.renderAuthComponent} to="/Authenticate">Sign up
                                        </Link>
                                </div>
                            </div>
                        </div>
                        <div className={"col"}> 
                        </div>
                    </div>
                    <div className="row" id="second-half-home-page">
                        <div style={{backgroundColor: "white"}} className={"col"} > 
                            <div className="row subRow">
                                <div className={"col-6"}> 
                                    <div className="row subRow about-site-text about-site-header">
                                        <h1>Welcome to DiagnoSIM</h1>
                                    </div>
                                    <div className="row subRow about-site-text">
                                        <h2>What it is: </h2>
                                        <span>
                                            This website is my capstone project for the Denver Flatiron school.
                                            It was built to demonstrate what I've learned as well as display my passion for 
                                            health tech. Feel free to signup, and try out the features of this site or watch the demo here!
                                            <br></br>
                                            <br></br>
                                            <b>Functionalities include: </b>
                                            <br></br>
                                            - Full auth using JWT and bycrypt
                                            <br></br>
                                            - Full CRUD capabilities for user
                                            <br></br>
                                            - RESTful design
                                            <br></br>
                                            - Data visualization for individual and overall simulation runthroughs
                                            <br></br> 
                                            - Ability to download PDFs of your visualized results
                                            <br></br>
                                            - Embedded Unity WebGL project that performs fetch requests to backend
                                            <br></br>
                                            <br></br>
                                            <h2>How it works:</h2>
                                            DiagnoSIM is a Unity based simulator demo for doctors to practice their
                                            interpersonal skills and relationship building with patients, as studies show
                                            the better and more connected a patient is with their doctor, the more likely
                                            they are to have better treatment outcomes and satisfaction. 
                                            <br></br>
                                            The demo rates you based on 3 criteria: empathy, communication, and shared decisions. 
                                            The criteria were determined from this <a href="https://patientengagementhit.com/news/3-key-traits-of-a-positive-patient-provider-relationship">article</a>.
                                            <br></br>
                                            <br></br>
                                        </span>
                                    </div>
                                </div>
                                <div className={"col-6 mt-auto"} id="icons-home-page-container"> 
                                    <div className="row">
                                        <img src={Heart} id="heart-container" alt="heart" className="icon-size"/>
                                    </div>
                                    <div className="row">
                                    </div>
                                    <div className="row">
                                    <div className="col-md-4">
                                        <img src={DoctorA} alt="female presenting doctor" className="icon-size2"/>
                                    </div>
                                    <div className="col-md-4">
                                        <img src={DocumentIcon} alt="document icon" className="icon-size2"/>
                                    </div>
                                    <div className="col-md-4">
                                        <img src={DoctorB} alt="male presenting doctor" className="icon-size2"/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div ref={this.myDivToFocus} className="row subRow" id="home-page-footer"></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default HomePage