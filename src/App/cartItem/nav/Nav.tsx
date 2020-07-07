import React, { useState, useEffect } from 'react'
import './Nav.css'
import { ICartItem } from '../../models/Item'

interface IProps {
    setTabIndex: (tab: number) => void,
    tabIndex: number,
    cartItems: ICartItem[]
}

const Nav: React.FC<IProps> = ({setTabIndex, tabIndex, cartItems}) => {
    const [price, setPrice] = useState(0)
    
    useEffect(() => {
        let sum = 0
        cartItems.forEach(item => {
            sum = sum + item.price
        })
        setPrice(sum)
    }, [cartItems])

    return (
        <nav className='cart-nav'>
            <ul className='nav-list'>
                <li className={`nav-item ${tabIndex === 1 && 'active'}`} onClick={() => setTabIndex(1)}>Items</li>
                <li className={`nav-item ${tabIndex === 2 && 'active'}`} onClick={() => setTabIndex(2)}>Cart</li>
            </ul>
            <div className='cart-icon' onClick={() => setTabIndex(2)} >
                <i className='fas fa-shopping-cart' />
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} (${price.toFixed(2)})
            </div>
        </nav>
    )
}

export default Nav
