import React from 'react'

const ArrowButton = ({icon}) => {
    return (
        <> 
            <div className='btn'>
                <a href='#' className='icon'>{icon}</a>
            </div>
        </>
    )
}

export default ArrowButton