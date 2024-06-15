import React from 'react'

function Video({ video }) {
    return (
        <>
            <div className='max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden h-96 sm:h-96'>
                <video className='min-w-72 max-w-72 lg:max-w-60 lg:min-w-48 h-full object-cover' autoPlay loop>
                    <source src={video} type="video/mp4" className='' />
                    Your browser does not support the video tag.
                </video>


            </div>
        </>
    )
}

export default Video
