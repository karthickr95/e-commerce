import React from 'react'

import './cart-popup.styles.scss'

import CustomButton from '../custom-button/custom-button'

const CartPopup = () => {
    return (
        <div className='cart-popup'>
            <div className='cart-items'>
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    )
}

export default CartPopup