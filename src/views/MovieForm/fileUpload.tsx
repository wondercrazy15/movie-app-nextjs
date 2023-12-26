import React, { Fragment, useEffect, useState } from 'react'
import { UseFormSetValue } from 'react-hook-form'

function FileUpload({
    setImage,
    getImage,
}: {
    setImage: UseFormSetValue<any>,
    getImage: string
}) {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState<string | undefined>('')

    useEffect(() => {
        console.log(getImage)
        if (!getImage) {
            setPreview(undefined)
            return
        }
        setPreview(getImage)
        return () => {

        }
    }, [getImage])


    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // const formData = new FormData();
        // formData.append("poster", selectedFile);
        setImage('poster', selectedFile)
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
    return (
        <div className="col-md-6 col-12">
            <div className="file-upload-wrapper">

                <div className="overlay">
                    {preview && <img src={preview} style={{ objectFit: 'cover', height: '100%' }} />}
                    <Fragment>
                        {!preview && <div className='text-center'>
                            <i className="fa-solid fa-arrow-up-from-bracket"></i>
                            <p>Drop an image here</p>
                        </div>}
                        <input type="file" name="poster" id="" accept="image/*" onChange={onSelectFile} />
                    </Fragment>
                </div>
            </div>
        </div>
    )
}

export default FileUpload