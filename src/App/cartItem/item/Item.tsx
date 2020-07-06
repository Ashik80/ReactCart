import React from 'react'
import { IItem } from '../../models/Item'
import './Item.css'

interface IProps {
    item: IItem
    button: JSX.Element
}

const Item: React.FC<IProps> = ({ item, button }) => {
    return (
        <div className='item'>
            <div className='left'>
                <div className='img-container' />
                <div className='item-details'>
                    <div className='item-name'>
                        {item.name}
                    </div>
                    <div className='item-description'>
                        {item.description}
                    </div>
                </div>
            </div>
            <div className='item-price-btn'>
                <div className='item-price'>
                    ${item.price}
                </div>
                <div className='button-container'>
                    {button}
                </div>
            </div>
        </div>
    )
}

export default Item
