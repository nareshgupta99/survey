import React, { Component } from 'react'
import Details from './Details'
import Question from './Question'

export default class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <>
                
                    <div className='container  mt-2  '>
                        <div className='text-center  card text-primary' >
                            <h1 className='bg-white pb-2'>Survey </h1>

                        </div>
                        <Details />
                        <Question />
                    </div>
                
            </>
        )
    }
}
