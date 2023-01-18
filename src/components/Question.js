import React from 'react'

 function Question(props) {
    const grey = {
        backgroundColor: "darkgrey"
    }
    return (
        <div className='d-container card mt-2' >
            <div className='card-body'>
                <form onSubmit={props.questionHandler}>
                    <div className='form-group mx-3'>
                        <b>3.</b>What are you currently Doing ?
                        <div className='mt-2'>

                            <div class="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="profession" id="inlineRadio1" value="Teaching" />
                                <label className="form-check-label" for="inlineRadio1">Teaching</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="profession" id="inlineRadio2" value="Programer" />
                                <label className="form-check-label" for="inlineRadio2" >Programer</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="profession" id="inlineRadio3" value="Student" />
                                <label className="form-check-label" for="inlineRadio3">Student</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="profession" id="inlineRadio3" value="Other" />
                                <label className="form-check-label" for="inlineRadio3">Other</label>
                            </div>
                        </div>
                        <div >
                            <input type="text" name="other" className="form-control mt-2" style={grey} placeholder='Type here if not listed' ></input>
                        </div >

                        <div className="mt-3">
                            <b>4.</b>Rate of Our Course.
                        </div>
                        <div class="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="rate" id="inlineRadio3" value="poor" />
                            <label className="form-check-label" for="inlineRadio3">Poor</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="rate" id="inlineRadio3" value="good" />
                            <label className="form-check-label" for="inlineRadio3">Good</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="rate" id="inlineRadio3" value="excelent" />
                            <label className="form-check-label" for="inlineRadio3">Excellent</label>
                        </div>
                        <div className='mt-3'>
                            <b>5.</b> Write your review here.
                        </div>
                        <div class="form-floating mt-3">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="review"></textarea>

                        </div>
                    </div>




                        <button type="submit" className='btn btn-primary mt-3 px-4 '>next</button>
                </form>

                        <center className='mt-3'>
                            <span className=' '>1</span>
                            <span className='badge rounded-pill text-bg-primary mx-2 '>2</span>
                        </center>
            </div >


        </div >

    )


}
export default Question;