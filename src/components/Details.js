import React from 'react'

export default function () {
  return (
    <div className="mt-2">
      <div className='card d-container  ' style={{ margin: "auto" }}>
        <div className='card-body'>

          <form className='bg-white mx-2 pd-3 form-size '>

            <div className='form-group'>

              <label htmlFor='Name' style={{ display: "block" }} >1.Name:</label>

              <input type="text" name="name" className="form-control" placeholder='John' />
            </div>


            <div className='form-group'>

              <label htmlFor='Name' style={{ display: "block" }} >2.Email:</label>

              <input type="Email" className="form-control" name="email" placeholder='john@example.com' />
            </div>

            <button type="submit" className='btn btn-primary mt-3 px-4 '>next</button>
          </form>
        </div>

        <center>
          <span className='badge rounded-pill text-bg-primary'>1</span>
          <span className='badge rounded-pill text-bg-primary mx-2'>2</span>
        </center>


      </div>

    </div>
  )
}
