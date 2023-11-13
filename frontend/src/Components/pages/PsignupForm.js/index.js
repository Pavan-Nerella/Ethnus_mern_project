import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='bg_signup signup template d-flex justify-content-center align-items-center vh-100 '>
            <div className='form_container_signup p-5 rounded '>
                <form>
                <h3 className='text-center'>Sign Up</h3>
                
                <div className='mb-2'>
                    <label htmlFor='fname'>First Name</label>
                    <input type='text' placeholder='Enter First Name' className='form-control'/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='lname'>Last Name</label>
                    <input type='text' placeholder='Enter Last Name' className='form-control'/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='number'>Phone no.</label>
                    <input type='number' placeholder='Enter Phone no.' className='form-control'/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control'/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='dob'>Date-of-Birth</label>
                    <input type='date' placeholder='Enter Last Name' className='form-control'/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Enter Password' className='form-control'/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='cpassword'>Confirm Password</label>
                    <input type='password' placeholder='Enter Password' className='form-control'/>
                </div>

                <div className='d-grid'>
                    <button className='btn btn-primary'>Sign UP</button>
                </div>

                <p className='text-end mt-2'>
                    Already have an account<Link to='/plogin' className='ms-2'>Sign in</Link>
                </p>
                  </form>
            </div>
        </div>
  )
}

export default Signup