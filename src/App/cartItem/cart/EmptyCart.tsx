import React from 'react'
import './EmptyCart.css'

const EmptyCart = () => {
    return (
        <div className='empty-cart'>
            <div>Your cart is empty</div>
            <div>Why not add some expensive products to it?</div>
        </div>
    )
}

export default EmptyCart