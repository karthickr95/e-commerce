import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { ReactComponent as ShoppingBagSVG } from '../../assets/shopping-bag.svg'

import { toggleCartPopupAction } from '../../redux/cart/actions'
import { selectCartItemsCount } from '../../redux/cart/cart-selector'

const CartButtonContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const ShoppingBagIcon = styled(ShoppingBagSVG)`
  width: 24px;
  height: 24px;
`

const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`

const CartButton = () => {

    const dispatch = useDispatch()

    const cartCount = useSelector(selectCartItemsCount)

    return (
        <CartButtonContainer onClick={() => dispatch(toggleCartPopupAction())}>
            <ShoppingBagIcon />
            <ItemCountContainer>{cartCount}</ItemCountContainer>
        </CartButtonContainer>
    )
}

export default CartButton