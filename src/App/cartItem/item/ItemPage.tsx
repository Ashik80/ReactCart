import React from 'react'
import Item from './Item'
import { IItem } from '../../models/Item'
import AddButton from './AddButton'

interface IProps {
    items: IItem[],
    addToCart: (id: number) => void
}

const ItemPage: React.FC<IProps> = ({items, addToCart}) => {
    return (
        <div>
            {items.map(item => 
                <Item 
                    key={item.id}
                    item={item} 
                    button={<AddButton addToCart={addToCart} item={item} />} 
                />)
            }
        </div>
    )
}

export default ItemPage
