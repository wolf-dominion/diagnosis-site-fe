import React, { Component } from 'react'

class ContactPage extends Component{

    // componentDidMount() {
    //     const script = document.createElement("script");
    //     script.src = "/static/libs/your_script.js";
    //     script.async = true;
    //     script.onload = () => this.scriptLoaded();
      
    //     document.body.appendChild(script);
    //   }


    generateSvg = () => {
        return <svg width="80" height="80">
            <polygon points="40,40 80,0 80,80"/>
            </svg>
    }

    // createPdf = () => {
    //     const SVGtoPDF = require('svg-to-pdfkit');
    //     SVGtoPDF(document, this.generateSvg(), 0, 0);
    //     console.log('SVGtopdf', SVGtoPDF);
        
    // }


    render(){
        const svgItem = this.generateSvg()
        return(
            <div>
                <div className="contact-form-container">
                    {svgItem}
                </div>
            </div>
        )
    }
}

export default ContactPage