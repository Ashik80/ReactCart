import React, { useState, SyntheticEvent } from 'react'
import Nav from './nav/Nav'
import './Cart.css'
import ItemPage from './item/ItemPage'
import CartPage from './cart/CartPage'
import items from './item/item-data'
import { ICartItem } from '../models/Item'

const Cart = () => {
    const [tabIndex, setTabIndex] = useState(1)
    const [cartItems, setCartItems] = useState<ICartItem[]>([])

    const handleQuantity = (e: SyntheticEvent<HTMLButtonElement>) => {
        const { id, name } = e.currentTarget
        let cartItem = cartItems.filter(item => item.id === parseInt(id))[0]
        let item = items.filter(item => item.id === parseInt(id))[0]
        let index = cartItems.indexOf(cartItem)
        let carts = cartItems.slice()
        if (name === 'increase') {
            carts[index].quantity++
            carts[index].price = carts[index].price + item.price
            setCartItems(carts)
        }
        else if (name === 'decrease') {
            if (carts[index].quantity > 1) {
                carts[index].quantity--
                carts[index].price = carts[index].price - item.price
                setCartItems(carts)
            }
            else {
                setCartItems(cartItems.filter(item => item.id !== parseInt(id)))
            }
        }
    }

    const handleCart = (id: number) => {
        let item = items.filter(item => item.id === id)[0]
        let cartItem = cartItems.filter(cart => cart.id === id)[0]
        let cart = cartItems.slice()
        let index = cartItems.indexOf(cartItem)
        if (cartItem) {
            cart[index].quantity++
            cart[index].price = cart[index].price + item.price
            setCartItems(cart)
        }
        else {
            let newCartItem = { ...item, quantity: 1 }
            setCartItems([...cartItems, newCartItem])
        }
    }

    return (
        <div className='cart'>
            <Nav setTabIndex={setTabIndex} tabIndex={tabIndex} cartItems={cartItems} />
            {tabIndex === 1 ? <ItemPage items={items} addToCart={handleCart} />
                : <CartPage items={cartItems} handleQuantity={handleQuantity} />}
        </div>
    )
}

export default Cart
