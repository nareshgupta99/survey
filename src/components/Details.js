import React from 'react'

export default function () {
  return (
    <div className="">
        <div className='card d-container  ' style={{margin:"auto"}}>
            <form className='bg-white mx-2 pd-3'>
                <label htmlFor='Name'  style={{display:"block"}} >1.Name:</label>
                
                    <input type="text" className="form-control"  />
                
            </form>
            <form className='bg-white mx-2'>
                <label htmlFor='Name'  style={{display:"block"}} >2.Email:</label>
                
                    <input type="Email" className="form-control"  />
                
            </form>
        </div>

    </div>
  )
}
