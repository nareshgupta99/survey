import React, { Component } from 'react'
import Details from './Details'
import Question from './Question'
import { v4 as uuidv4 } from 'uuid';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase ,ref, set  } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDZXS-KcOZ_DJ_d7EBMpsOgjF2SxRovb3U",
    authDomain: "survey-5b1a2.firebaseapp.com",
    databaseURL: "https://survey-5b1a2-default-rtdb.firebaseio.com",
    projectId: "survey-5b1a2",
    storageBucket: "survey-5b1a2.appspot.com",
    messagingSenderId: "32454318406",
    appId: "1:32454318406:web:32718ed392dcd0d2572d47",
    measurementId: "G-2RFH3Q5Q4Y"
  };
  


   const app= initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);



export default class Container extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            id:uuidv4(),
            name:null,
            email:null,
            question:{
                q3:"",
                q4:"",
                q5:"",
                other:""

            }
        }
        
    }
    submitHandler = (event) => {
        event.preventDefault();
        const name=event.target.name.value
        const email=event.target.email.value
        this.setState({name,email})
        
        // console.log(this.state.email)
        
    };
    questionHandle=(event)=>{
        event.preventDefault();
        const database=getDatabase(app)
        const questions={};
        questions.q3=event.target.profession.value
        questions.q4=event.target.rate.value
        questions.q5=event.target.review.value
        questions.other=event.target.other.value
        this.setState({questions})
       set(ref(database,"survey/"+this.state.id),{
            name:this.state.name,
            email:this.state.email,
            questions:this.state.question
        })
        console.log(this.state)
        // console.log(questions);
    };
    otherHandler=()=>{
        alert()
    }
    render() {
        return (
            <>

                <div className='container  mt-2  '>
                    <div className='text-center  card text-primary' >
                        <h1 className='bg-white pb-2'>Survey </h1>

                    </div>
                    
                    {this.state.name=== null && this.state.email=== null?(<Details submit={this.submitHandler} />):(<Question questionHandler={this.questionHandle} radio={this.otherHandler}/>)}
                    
                    
                </div>

            </>
        )
    }
}
