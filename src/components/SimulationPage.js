import React, { Component } from 'react'
import Unity, { UnityContent } from 'react-unity-webgl'

const unityBuildDirPath = process.env.PUBLIC_URL + 'Results_Test_Build/Build';
const unityBuildJsonPath = unityBuildDirPath + '/Results_Test_Build.json';
const unityLoaderPath = unityBuildDirPath + '/UnityLoader.js';

class SimulationPage extends Component{
    constructor(props) {
        super(props);
    this.unityContent = new UnityContent(
        unityBuildJsonPath,
        unityLoaderPath
    )

    this.unityContent.on("loaded", () => {

        this.unityContent.send(
            "CredentialsReceiver",
            "SetToken",
            localStorage.token
        );

        console.log('didUNITY DO WORKIT?', localStorage.token);
        // Now we can for example hide the loading overlay.
        this.setState({
            isLoading: false
        });
    });
}

    componentDidMount() {
        
        
    }

    render(){

        return(
            <div className="unity-container">
                <p>Sim page</p>
                < Unity unityContent={this.unityContent}/> 
            </div>
        )
    }
}

export default SimulationPage