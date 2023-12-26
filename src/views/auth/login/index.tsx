import React from 'react'
import { loginAction } from './loginAction'

function Login() {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '100svh' }}>
            <div className='login_wrap'>
                <h1 className='text-center'>Sign in</h1>
                <form action={loginAction}>
                    <div className="mb-3">
                        <input required type="email" name='email' placeholder='Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        {/* <div id="emailHelp" className="form-text text-danger">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <input required type="password" name='password' placeholder='Password' className="form-control" id="exampleInputPassword1" />
                        {/* <div id="emailHelp" className="form-text text-danger">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <div>
                        <button
                            className='btn btn-primary btn-lg w-100'
                            type='submit'
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login