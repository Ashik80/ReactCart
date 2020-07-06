import React, { SyntheticEvent } from 'react'
import './QuantityButton.css'
import { ICartItem } from '../../models/Item'

interface IProps {
    cartItem: ICartItem,
    handleQuantity: (e: SyntheticEvent<HTMLButtonElement>) => void
}

const QuantityButton: React.FC<IProps> = ({ cartItem, handleQuantity }) => {
    return (
        <div className='quantity-buttons'>
            <button 
                className='decrease'
                id={cartItem.id.toString()}
                name='decrease' 
                onClick={handleQuantity}
            >
                -
            </button>
            <span className='cart-count'>{cartItem.quantity}</span>
            <button 
                id={cartItem.id.toString()}
                name='increase' 
                className='increase' 
                onClick={handleQuantity}
            >
                +
            </button>
        </div>
    )
}

export default QuantityButton
