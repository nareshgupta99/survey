import React from 'react'
import "./Register.css"

export default function Register(props) {
    return (
        <div className='card-body ' style={{ background: "white", height: "100vh" }} >
            <div className='container r-container'>

                <div className=" form-container text-white">
                    <div className='text-black'>

                        <h3 >Create Account</h3>


                        <h6 className='mt-3 text-black'>Get started with free Account</h6>


                    </div>
                    <div className="d-grid gap-2">

                        <button type="submit" className='btn btn-primary mt-3 px-4 '>signup via google</button>
                    </div>

                    <div className="d-grid gap-2">

                        <button type="submit" className='btn  mt-3 px-4 text-white' style={{ background: "#4267B2" }}>signup via facebook</button>
                    </div>

                    <p className="text-black    ">or</p>


                    <form className=' mx-3 ' onSubmit={props.submit}>

                        <div className='form-group mt-2'>
                            <input type="Email" className="form-control" name="email" placeholder='Email Address' />
                        </div>

                        <div className='form-group mt-2'>
                            <input type="password" className="form-control" name="password" placeholder='Create Password' />
                        </div>

                        <div className='form-group mt-2'>
                            <input type="password" className="form-control" name="repeatPassword" placeholder='Repeat Password' />
                        </div>
                        <div className="d-grid gap-2">

                            <button type="submit" className='btn btn-primary mt-3 px-4 '>Register</button>
                        </div>

                    </form>
                    <h6 className='text-black'>Have an account?<a href="/">login</a></h6>
                </div>

            </div>
        </div>






    )
}
