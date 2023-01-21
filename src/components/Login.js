import React from 'react'
import "./Login.css"

export default function Login() {
  return (
    <div className='container card  ' >
      <div className=" form-container card-body text-white  l-container">
        <div className='text-black text-center'>

          <h3 >Create Account</h3>

          <div className="d-grid gap-2">

            <button type="submit" className='btn btn-primary mt-3 px-4 '>signup via google</button>
          </div>

          <div className="d-grid gap-2">

            <button type="submit" className='btn  mt-3 px-4 text-white' style={{ background: "#4267B2" }}>signup via facebook</button>
          </div>

          <p className=" text-black    ">or</p>
        </div>
        <form className=' mx-3 '  >

          <div className='form-group mt-2'>
            <input type="Email" className="form-control" name="email" placeholder='Email Address' />
          </div>

          <div className='form-group mt-2'>
            <input type="Email" className="form-control" name="password" placeholder='Create Password' />
          </div>

          <div className="d-grid gap-2">

            <button type="submit" className='btn btn-primary mt-3 px-4 '>Login</button>
          </div>

        </form>






        <h6 className='text-black text-center'><a href="/">Create</a> an account</h6>
      </div>




    </div>
  )
}
