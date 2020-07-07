import React, { SyntheticEvent } from 'react'
import Item from '../item/Item'
import { ICartItem } from '../../models/Item'
import QuantityButton from './QuantityButton'
import EmptyCart from './EmptyCart'

interface IProps {
    items: ICartItem[],
    handleQuantity: (e: SyntheticEvent<HTMLButtonElement>) => void
}

const CartPage: React.FC<IProps> = ({ items, handleQuantity }) => {
    return (
        <div className='cart-page'>
            {items.length > 0 ? items.map(item => 
                <Item 
                    key={item.id}
                    item={item} 
                    button={<QuantityButton cartItem={item} handleQuantity={handleQuantity} />} 
                />)
            : <EmptyCart />}
        </div>
    )
}

export default CartPage