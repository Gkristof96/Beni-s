import React from 'react'

const GyikCategory = ({title, children}) => {
    return (
        <>
                <div className='category-container'>
                    <h1 className='category-title'>{title}</h1>
                    <div className='item-container'>
                        {children}
                    </div>
                </div>
        </> 
    )
}

export default GyikCategory
