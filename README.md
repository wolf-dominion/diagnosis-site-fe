# DiagnoSIM
A virtual simulation and progress tracking app to help doctors improve their interpersonal relations with patients

## Table of contents
* [General info](#general-info)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)

## General info
Have you ever felt like you weren't listened to by your doctor? Maybe they never had official training on communicating with patients. Studies show that patients are more likely to have successful treatment when they a positive experience in the office. DiagnoSIM is a website for doctors to engage with a virtual patient via simulation, and assess and track their interpersonal communication skill development. 

## Intro Video
[DiagnoSIM demo on YouTube](link)

## Technologies
* React
* Javascript
* Bootstrap 4
* D3.js
* PDFKit

* ActiveRecord - version 6.0.2.2
* Rails - version 6.0.2 
* Ruby - version 2.6.1 and 2.6.5
* SQLite3 - version 1.4

* Unity WebGL - version 2019.4.1f1

## Code Example
```
    generateCards = () => {        
        let userResults = this.props.results
        return userResults.map(userResult => {            
            return <ResultCard
                key={userResults.indexOf(userResult)}
                resultNumber={userResults.indexOf(userResult)} 
                result={userResult}
                username={this.props.username}
                />
        })
    }
```

## Features
* Full auth using JWT and bycrypt
* Full CRUD capabilities for user
* RESTful design
* Data visualization for individual and overall simulation runthroughs
* Ability to download PDFs of your visualized results
* Embedded Unity WebGL project (simulation) that performs fetch requests to backend

## Status
Project v1 is finished and fully functional. 
I plan on implementing an email system for the contact page in the upcoming weeks. 

Stretch goal/challenge: Have a 3D model of doctor and patient in room to make the simulation more immersive. 

## Contact
Created by Hannah Drury. [My LinkedIn](https://www.linkedin.com/in/hannah-drury-042a8391/)

Feel free to contact me if you have questions or interest working together. 




