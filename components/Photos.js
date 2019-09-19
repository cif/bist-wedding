import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const PHOTO_SERVICE = 'https://bist-photo-service-3mrol3q5pq-uc.a.run.app'
// const PHOTO_SERVICE = 'http://localhost:3001'

export const Photos = () => {
    const [photos, updatePhotos] = useState([])
    const [uploading, setUploading] = useState(false)
    const [photoError, setPhotoError] = useState(false)
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        setUploading(true);
        acceptedFiles.forEach((file) => {
            fetch(`${PHOTO_SERVICE}/upload`, {
                'no-cors': true,
                method: 'POST',
                body: file
            })
                .then(r => r.json())
                .then(photo => {
                    setUploading(false);
                    updatePhotos(photos.concat(`https://storage.googleapis.com/wedding-photos-253415/${photo}`))
                })
                .catch(() => setPhotoError('Sorry, something went wrong. Please try again'));
        });

    }, [photos])

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/jpeg',
    })
    useEffect(() => {
        fetch(`${PHOTO_SERVICE}/getPhotos`, { 'no-cors': true })
            .then(r => r.json())
            .then(bucket => {
                updatePhotos(bucket);
            });

    }, []);

    return (
        <div>
            <style jsx>
                {`
                    .dropzone {
                        display: inline-block;
                        background-color: #FFF;
                        color: #687f7a !important;
                        padding: 19px 70px;
                        font-size: 25px;
                        border: none;
                        border-radius: 5px;
                        urbane-rounded, sans-serif;
                        margin: 5px;
                        margin-top: 0 !important;
                        cursor: pointer;
                    }
                    .photos {
                        width: 90%;
                        margin: 0 auto;
                    }
                    .photos div {
                        width: 120px;
                        height: 120px;
                        background-size: cover;
                        background-position: center;
                    }
                    .photos a {
                        border: none;
                        margin-bottom: -3px;
                    }
                    input, input:focus {
                        outline: 0 !important;
                        border: none !important;
                    }
                    @media only screen and (max-width: 900px)  {
                        .photos {
                            width: 100%;
                        }
                        .photos div {
                            width: 80px;
                            height: 80px;
                        }
                    }
                    `}
            </style>
            <div {...getRootProps({ style: { outline: 'none'}})}>
                {photoError && <h2>{photoError}</h2>}
                <input {...getInputProps()} />
                {
                    uploading
                        ? <p className="dropzone">Uploading! This might take a minute...</p>
                        :<p className="dropzone">Drag photo files here or click/tap to select</p>
                }
            </div>
            <p></p>
            <div className="photos">
                {photos.map(p =>
                    <a key={p} href={p} target="_blank"><div style={{ backgroundImage: `url(${p})` }} /></a>)
                }
            </div>
        </div>
      )
}

export default Photos;