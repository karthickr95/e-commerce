import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../redux/cart-selector'

import './cart-popup.styles.scss'

import CustomButton from '../custom-button/custom-button'
import CartItem from './cart-item'

const CartPopup = () => {

    const cartItems = useSelector(selectCartItems)

    return (
        <div className='cart-popup'>
            <div className='cart-items'>
                {
                    cartItems.length
                        ? cartItems.map(item =>
                            <CartItem key={item.product.id} cartProduct={item} />
                        )
                        : <span className='empty-message'>Your Cart is empty</span>

                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartPopup