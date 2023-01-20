import React from 'react'
import "./Register.css"

export default function Register(props) {
    return (
        <div className='card-body ' style={{ background: "white", height: "100vh" }} >
            <div className='container r-container'>

                <div className=" form-container text-white">
                    <div className='text-black'>

                    <h3 >Create Account</h3>
                    </div>
                    <h6 className='mt-3 text-black'>Get started with free Account</h6>
                    <div className='bg-primary heading'>
                        signup via google

                    </div>
                    <div style={{background:"#4267B2"}} className='mt-2 '>
                        <h6>signup via facebook</h6>
                    </div>
                    or


                    <form className=' mx-3 ' onSubmit={props.submit}>

                        <div className='form-group mt-2'>
                            <input type="Email" className="form-control" name="email" placeholder='Email Address' />
                        </div>

                        <div className='form-group mt-2'>
                            <input type="Email" className="form-control" name="password" placeholder='Create Password' />
                        </div>

                        <div className='form-group mt-2'>
                            <input type="Email" className="form-control" name="repeatPassword" placeholder='Repeat Password' />
                        </div>
                        <button type="submit" className='btn btn-primary mt-3 px-4 '>Register</button>

                    </form>
                    <h6 className='text-black'>Have an account <a href="#">login</a></h6>
                </div>

            </div>
        </div>





    )
}
