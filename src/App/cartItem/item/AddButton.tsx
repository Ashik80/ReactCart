import React from 'react'
import './AddButton.css'
import { IItem } from '../../models/Item'

interface IProps {
    item: IItem,
    addToCart: (id: number) => void
}

const AddButton: React.FC<IProps> = ({ item, addToCart }) => {
    return (
        <button className='add-button' onClick={() => addToCart(item.id)}>
            Add to Cart
        </button>
    )
}

export default AddButton
