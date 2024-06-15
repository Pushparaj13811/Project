import React from 'react'

function Card({image}) {
    return (
        <>
            <div className='max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden h-96 sm:h-96'>
                <img src={image} alt='' className='min-w-72 lg:min-w-48 h-full object-cover' />
            </div>
        </>
    )
}

export default Card
