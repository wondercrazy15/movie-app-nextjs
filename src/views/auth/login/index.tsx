'use client'
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';


interface IUser {
    email?: string,
    password?: string
}

const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
});

function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const router = useRouter()

    const onSubmit = async (inputData: IUser) => {
        const response = await axios.post('https://movie-app-backend-j12g.onrender.com/api/users/login', {
            email: inputData.email,
            password: inputData.password
        })
        if (response.data.error == false) {
            localStorage.setItem('Token', response.data.accessToken)
            router.push('/movie')
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div>
                <h1 className='text-center'>Sign in</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <input type="email"
                            placeholder='Email'
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            {...register('email')} />
                        {errors.email && (
                            <div className="invalid-feedback">{errors.email.message}</div>
                        )}

                    </div>
                    <div className="mb-3">
                        <input type="password"
                            placeholder='Password'
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            id="exampleInputPassword1"
                            {...register('password')} />
                        {errors.password && (
                            <div className="invalid-feedback">{errors.password.message}</div>
                        )}
                    </div>
                    <div className="mb-3 form-check d-flex justify-content-center">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label ps-2" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <div>
                        <button className='btn btn-primary btn-lg w-100'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login