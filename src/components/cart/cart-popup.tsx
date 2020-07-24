import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/store'

import './cart-popup.styles.scss'

import CustomButton from '../custom-button/custom-button'
import CartItem from './cart-item'

const CartPopup = () => {

    const cartItems = useSelector((state: AppState) => state.cart.cartItems)

    return (
        <div className='cart-popup'>
            <div className='cart-items'>
                {
                    cartItems.map(item =>
                        <CartItem key={item.product.id} cartProduct={item}
                        />
                    )
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartPopup