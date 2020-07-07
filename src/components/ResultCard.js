import React, { Component } from 'react'
import { Card, Button, Modal } from "react-bootstrap";
import { CardColumns } from "react-bootstrap";
import ChartPracticeApp from './ChartPracticeApp'
import ChartForSingleResult from './ChartForSingleResult';
import PDFDocument from '@react-pdf/pdfkit';

let blobStream  = require('blob-stream');
let SVGtoPDF = require('svg-to-pdfkit');

class ResultCard extends Component{

    state = {
        show: false
    }

    getOverallScore = () => {
        const {empathy, communication, sharedecision} = this.props.result
        let overallScore = (empathy + communication + sharedecision)/3
        return overallScore.toFixed(2)
    }

    handleClick = () => {
        this.setState({show: !this.state.show})
    }

    handleDownload = () => {
        console.log('svgtopdf: ', SVGtoPDF)

        let doc = new PDFDocument({compress: false});
        doc.fillColor('black')
            .fillOpacity(1)
            .strokeColor('black')
            .strokeOpacity(1)
            .lineWidth(1)
            .undash()
            .fontSize(12)
            .font('Helvetica');
        
        let svg = document.querySelector(`#result-${this.props.result.id}`);

        const stream = doc.pipe(blobStream());
        let createdPDF = SVGtoPDF(doc, svg, 150, 150, {'preserveAspectRatio': 'none'});
        
        doc.fontSize(20)
            .text(`Survey Results for ${this.props.username}`, 170, 100)

        doc.fontSize(13)
            .fillColor('#139647')
            .text(`Empathy: ${this.props.result.empathy}`, 100, 435)
            .fillColor('#db3c26')
            .text(`Communication: ${this.props.result.communication}`, 100, 460)
            .fillColor('#4267b1')
            .text(`Shared-Decision Making: ${this.props.result.sharedecision}`, 100, 485)
            .fillColor('black')
            .text(`Overall Score: ${this.getOverallScore()}`, 100, 510)
        
        doc.end();
        stream.on('finish', function() {
        // get a blob you can do whatever you like with
        const blob = stream.toBlob('application/pdf');
        const url = stream.toBlobURL('application/pdf');
        // window.location = url
        let win = window.open(url, '_blank');
        win.focus();
        })
    }

    render(){
        return (
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Case {this.props.resultNumber + 1}</Card.Title>
                    <Card.Text>
                        Empathy: {this.props.result.empathy} <br></br>
                        Communication: {this.props.result.communication} <br></br>
                        Shared-Decision Making: {this.props.result.sharedecision} <br></br>
                        Overall Score: {this.getOverallScore()}
                    </Card.Text>
                    <Button onClick={this.handleClick} variant="primary">View Analysis</Button>
                </Card.Body>
            </Card>
            <Modal show={this.state.show} >
                <Modal.Header>
                    <Modal.Title>Assessment Results</Modal.Title>
                    <Button className="btn btn-danger" onClick={this.handleClick}>x</Button>
                </Modal.Header>
                <Modal.Body>
                    <p>Graph here</p>
                    < ChartForSingleResult result={this.props}/>
                    {/* <ChartPracticeApp userInfo={this.props}/> */}
                    {/* {<Analysis result={this.props.result}/>} */}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleDownload}>Download PDF</Button>
                </Modal.Footer>
            </Modal>
            </div>
        )
    }
}

export default ResultCard