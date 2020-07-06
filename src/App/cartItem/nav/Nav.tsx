import React from 'react'
import './Nav.css'

interface IProps {
    setTabIndex: () => void,
    tabIndex: number
}

const Nav: React.FC<IProps> = ({setTabIndex, tabIndex}) => {
    return (
        <nav className='cart-nav'>
            <ul className='nav-list'>
                <li className={`nav-item ${tabIndex === 1 && 'active'}`} onClick={setTabIndex}>Items</li>
                <li className={`nav-item ${tabIndex === 2 && 'active'}`} onClick={setTabIndex}>Cart</li>
            </ul>
        </nav>
    )
}

export default Nav
