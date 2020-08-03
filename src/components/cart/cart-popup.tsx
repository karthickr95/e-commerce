import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import CartItem from './cart-item'
import { NormalButton } from '../button/button'

import { toggleCartPopupAction } from '../../redux/cart/actions'
import { selectCartItems } from '../../redux/cart/cart-selector'

const CartPopupContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`

const CheckoutButton = styled(NormalButton)`
  margin-top: auto;
`

const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

const CartPopup = (props: RouteComponentProps) => {

    const { history } = props

    const dispatch = useDispatch()

    const cartItems = useSelector(selectCartItems)

    return (
        <CartPopupContainer>
            <CartItems>
                {
                    cartItems.length
                        ? cartItems.map(item =>
                            <CartItem key={item.product.id} item={item} />
                        )
                        : <EmptyMessage>Your Cart is empty</EmptyMessage>

                }
            </CartItems>
            <CheckoutButton
                onClick={() => {
                    dispatch(toggleCartPopupAction())
                    history.push('/checkout')
                }}>
                GO TO CHECKOUT
            </CheckoutButton>
        </CartPopupContainer>
    )
}

export default withRouter(CartPopup)