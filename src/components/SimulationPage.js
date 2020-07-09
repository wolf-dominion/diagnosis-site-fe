import React, { Component } from 'react'
import Unity, { UnityContent } from 'react-unity-webgl'

const unityBuildDirPath = process.env.PUBLIC_URL + 'Results_Test_Build/Build';
const unityBuildJsonPath = unityBuildDirPath + '/Results_Test_Build.json';
const unityLoaderPath = unityBuildDirPath + '/UnityLoader.js';

class SimulationPage extends Component{
    constructor() {
        super()
    this.unityContent = new UnityContent(
        unityBuildJsonPath,
        unityLoaderPath
    )

    this.unityContent.on("loaded", () => {
        this.unityContent.send(
            "CredentialsReceiver",
            "SetToken",
            localStorage.token
        )
    })
}

    render(){
        return(
            <div className="sim-page-container">
                <div className={"container-fluid p-0 "}>
                    <div className="row" id="sim-title">
                        <h1 id="sim-header">Click Begin to get started</h1>
                    </div>
                    <div className="row">
                        <span className="sim-explanation">
                            When you click begin, you will be shown 3 sets of questions. 
                            <br></br>
                            Click on the question you think would be the most optimal to ask a patient. 
                            <br></br>
                            These are sample questions and are not representative of a final product.
                            <br></br>
                            Note: Simulation may take a minute or two to load!
                        </span>
                    </div>
                    <div className="row">
                        <div className="unity-container">
                            < Unity unityContent={this.unityContent}/> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SimulationPage