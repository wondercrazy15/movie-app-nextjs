'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import FileUpload from './fileUpload'
import { useForm, SubmitHandler } from "react-hook-form"
import formSubmitAction from './utils/formSubmitAction'
import { useParams } from 'next/navigation'
import getMovieDetails from './utils/getMovieDetails'

interface Props {
    forEdit?: boolean
}

function MovieForm(props: Props) {
    const { forEdit } = props
    const router = useRouter()
    const onCancel = () => {
        router.push('/')
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues
    } = useForm<any>()


    const params = useParams<{ id: string; }>()
    const [preview, setPreview] = useState<string>('')
    useEffect(() => {
        if (forEdit) {
            getMovieDetails(params.id).then((res) => {
                const fromData = res.data.data;
                setValue('title', fromData.title)
                setValue('publishingYear', fromData.publishingYear)
                setValue('poster', fromData.poster)
                setPreview(fromData.poster)
            })
        }
        return () => {

        }
    }, [forEdit])



    const [isSubmitting, setIsSubmitting] = useState(false)
    const onSubmit: SubmitHandler<any> = (data) => {
        setIsSubmitting(true)
        const form = new FormData();
        form.append('title', data.title);
        form.append('publishingYear', data.publishingYear);
        form.append('poster', data.poster);

        if (forEdit) {
            formSubmitAction('put', `movies/edit/${params.id}`, form).then(() => {
                onCancel()
                setIsSubmitting(false)
            }).catch(() => {
                setIsSubmitting(false)
            })
        } else {
            formSubmitAction('post', 'movies/add', form).then(() => {
                onCancel()
                setIsSubmitting(false)
            }).catch(() => {
                setIsSubmitting(false)
            })
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
                            <input type="text" placeholder='Title' className="form-control" id="InputTitle" {...register("title")} />
                        </div>
                        <div className="mb-3 w-md-50 w-100">
                            <input type="text" placeholder='Publishing year' className="form-control" id="InputPublishingYear" {...register("publishingYear")} />
                        </div>
                        <div className='d-flex justify-content-between group mt-5'>
                            <button type='button' className='btn btn-outline-light btn-lg' onClick={onCancel}>Cancel</button>
                            <button type='submit' className='btn btn-primary btn-lg' disabled={isSubmitting}>{isSubmitting ? `Submitting...` : `Submit`}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MovieForm