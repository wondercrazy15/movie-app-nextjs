'use client'
import axios from 'axios'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import FileUpload from './fileUpload'

interface Props {
    forEdit?: boolean
}

interface IMovie {
    title?: string
    publishingYear?: string
    poster?: string
}

function MovieForm(props: Props) {

    const { forEdit} = props
    const params = useParams<{ id: string; }>()
    const id=params.id
    const token = localStorage.getItem("Token")
    const router = useRouter()
    const { register, handleSubmit, setValue, watch } = useForm()
    const [editMovie, setEditMovie] = useState<any>([])
    const [preview, setPreview] = useState<string>('')

    useEffect(() => {
        if (forEdit == true && id) {
            GetMovieById(id)
        }
    }, [id])

    useEffect(()=>{
        if(id && editMovie !== null && Object.keys(editMovie).length > 0){
            setValue("title", editMovie?.title)
            setValue("publishingYear", editMovie?.publishingYear)
            setValue("poster", editMovie?.poster)
            setPreview(editMovie?.poster)
        }
    },[setValue,editMovie])    

    const onCancel = () => {
        router.push('/movie')
    }

    const GetMovieById = async (id: string) => {
        const response = await axios.get(`https://movie-app-backend-j12g.onrender.com/api/movies/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        if (response?.data !== null) {
            console.log("GetData::", response.data);
            setEditMovie(response?.data?.data)
        }
    }

    const AddMovie = async (formData: any) => {
        const response = await axios({
            method: 'post',
            url: 'https://movie-app-backend-j12g.onrender.com/api/movies/add',
            data: formData,
            headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
        })
        if (response?.data?.data == true) {
            router.push('/movie')
        }
    }

    const EditMovie = async (formData: any) => {
        const response = await axios({
            method: 'put',
            url: `https://movie-app-backend-j12g.onrender.com/api/movies/edit/${id}`,
            data: formData,
            headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
        })
        if (response?.data?.data == true) {
            router.push('/movie')
        }
    }

    const onSubmit = async (data: IMovie) => {
        var formData = new FormData()
        formData.append("title", data.title ?? '')
        formData.append("publishingYear", data.publishingYear ?? '')
        formData.append("poster", data.poster ? data.poster : '')
        if (forEdit == true && id) {
            EditMovie(formData)
        }
        else {
            AddMovie(formData)
        }
    }

    return (
        <div className='container movie_container'>
            <header>
                <h2>{forEdit ? `Edit` : `Create a new movie`}</h2>
            </header>

            <div className="row">
            <FileUpload setImage={setValue} getImage={preview} />
                <div className="col-md-6 col-12">
                    <form className='w-md-75 w-100 movie_form' onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <input type="text"
                                placeholder='Title'
                                className="form-control"
                                id="InputTitle"
                                {...register('title')} />
                        </div>
                        <div className="mb-3 w-md-50 w-100">
                            <input type="text"
                                placeholder='Publishing year'
                                className="form-control"
                                id="InputPublishingYear"
                                {...register('publishingYear')} />
                        </div>
                        <div className='d-flex justify-content-between group mt-5'>
                            <button type='button' className='btn btn-outline-light btn-lg' onClick={onCancel}>Cancel</button>
                            {forEdit == true && id ?
                                <button className='btn btn-primary btn-lg'>Update</button>
                                :
                                <button className='btn btn-primary btn-lg'>Submit</button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MovieForm