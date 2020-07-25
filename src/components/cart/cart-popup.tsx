import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { selectCartItems } from '../../redux/cart-selector'

import './cart-popup.styles.scss'

import CustomButton from '../custom-button/custom-button'
import CartItem from './cart-item'
import { toggleCartPopupAction } from '../../redux/actions'

const CartPopup = (props: RouteComponentProps) => {

    const { history } = props

    const dispatch = useDispatch()

    const cartItems = useSelector(selectCartItems)

    return (
        <div className='cart-popup'>
            <div className='cart-items'>
                {
                    cartItems.length
                        ? cartItems.map(item =>
                            <CartItem key={item.product.id} item={item} />
                        )
                        : <span className='empty-message'>Your Cart is empty</span>

                }
            </div>
            <CustomButton onClick={() => {
                dispatch(toggleCartPopupAction())
                history.push('/checkout')
            }}>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

export default withRouter(CartPopup)