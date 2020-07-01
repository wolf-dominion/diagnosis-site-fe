import React, { Component } from 'react'
import Image from './images/whitecoat.jpg'

class HomePage extends Component{


    render(){
        
        return(
            <div>
                <div id="home-page-image-div">
                    <img id="home-image" src={Image} />
                    <div id="home-page-info-container">
                        <h1 id="home-page-info">DiagnoSIM</h1>
                        <h1 id="home-page-info2">Interpersonal Skills Simulation</h1>
                        <span className="home-page-info3">
                            Assess your communication effectiveness
                        </span>
                        <br></br>
                        <span className="home-page-info3">
                            Improve doctor-patient relationships
                        </span>
                        <br></br>
                        <span className="home-page-info3">
                            Create a healthier world
                        </span>
                    </div>
                </div>
                {/* <div className={"container-fluid p-0"}>
                    <div className="row">
                        <div style={{backgroundColor: "gold"}} className={"col"}> 
                            .col 1
                        </div>
                    </div>
                    <div className="row">
                        <div style={{backgroundColor: "red"}} className={"col-4"}> 
                            .col 2
                        </div>
                        <div style={{backgroundColor: "green", padding: "20px"}} className={"col-4"}> 
                            <div style={{backgroundColor: "blue"}} className="row subRow"><p>Hello</p></div>
                            <div style={{backgroundColor: "grey"}} className="row subRow"><p>Hello</p></div>
                        </div>
                        <div style={{backgroundColor: "green"}} className={"col-4"}> 
                            .col 1
                        </div>
                    </div>
                </div> */}
            </div>

        )
    }
}

export default HomePage