import React from 'react'
import styled from 'styled-components'

import { CartProduct } from '../../types/types'

const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`

const CartItemImage = styled.img`
  width: 30%;
`

const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`

type CartItemProps = {
    item: CartProduct
}

const CartItem = (props: CartItemProps) => {

    const { product: { imageUrl, name, price }, quantity } = props.item

    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt='item' />
            <ItemDetailsContainer>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x &#x20B9;{price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem