import React, { useState } from 'react'

const Basket = () => {
    const [productCount, setProductCount] = useState(0);
    return (
        <>
            <h1>Kosár ({productCount})</h1>
        </>
    )
}

export default Basket