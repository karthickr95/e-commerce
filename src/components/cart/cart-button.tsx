import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/store'

import './cart-button.styles.scss'

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg'
import { toggleCartPopupAction } from '../../redux/actions'
import { selectCartItemsCount } from '../../redux/cart-selector'

const CartButton = () => {

    const dispatch = useDispatch()

    const cartCount = useSelector(selectCartItemsCount)

    return (
        <div className='cart-icon' onClick={() => dispatch(toggleCartPopupAction())}>
            <ShoppingBagIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartButton