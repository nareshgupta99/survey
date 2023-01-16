import React from 'react'

export default function () {
  return (
    <div className="mt-2">
      <div className='card d-container  ' >
        <div className='card-body'>

          <form className=' mx-3 '>

            <div className='form-group'>

              <label htmlFor='Name' style={{ display: "block" }} ><b>1.</b>Name:</label>

              <input type="text" name="name" className="form-control" placeholder='John' />
            </div>


            <div className='form-group mt-2'>

              <label htmlFor='Name' style={{ display: "block" }} ><b>2.</b>Email: </label>

              <input type="Email" className="form-control" name="email" placeholder='john@example.com' />
            </div>

            <button type="submit" className='btn btn-primary mt-3 px-4 '>next</button>
          </form>
        </div>

        <center>
          <span className='badge rounded-pill text-bg-primary'>1</span>
          <span className='badge rounded-pill text-bg-primary mx-2 '>2</span>
        </center>


      </div>

    </div>
  )
}
