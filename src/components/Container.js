import React, { Component } from 'react'
import Details from './Details'
import Question from './Question'
import { v4 as uuidv4 } from 'uuid';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


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
        const questions={};
        questions.q3=event.target.profession.value
        questions.q4=event.target.rate.value
        questions.q5=event.target.review.value
        questions.other=event.target.other.value
        this.setState({questions},()=>console.log(this.state))
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
