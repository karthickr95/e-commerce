import React from 'react'
import { useDispatch } from 'react-redux'

import './cart-button.styles.scss'

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg'
import { toggleCartPopupAction } from '../../redux/actions'

const CartButton = () => {

    const dispatch = useDispatch()

    return (
        <div className='cart-icon' onClick={() => dispatch(toggleCartPopupAction())}>
            <ShoppingBagIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartButton