import React from 'react'

export default function Question() {
    return (
        <div className='d-container card mt-2' >
            <div className='card-body'>
                <form>
                    <div className='form-group mx-3'>
                        <b>3.</b>What are you currently Doing ?
                        <div className='mt-2'>

                            <div class="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Teaching" />
                                <label className="form-check-label" for="inlineRadio1">Teaching</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Programer" />
                                <label className="form-check-label" for="inlineRadio2">Programer</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Student" />
                                <label className="form-check-label" for="inlineRadio3">Student</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Other" />
                                <label className="form-check-label" for="inlineRadio3">Other</label>
                            </div>
                        </div>


                    </div>
                </form>

            </div>

        </div>
    )
}
