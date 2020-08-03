import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { CartProduct } from '../../types/types'

import { removeItemFromCartAction,
    clearItemFromCartAction,
    addItemToCartAction
} from '../../redux/actions'

const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`

const TextContainer = styled.span`
  width: 23%;
`

const QuantityContainer = styled(TextContainer)`
  display: flex;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }
`

const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`

type CheckoutItemProps = {
    item: CartProduct
}

const CheckoutItem = (props: CheckoutItemProps) => {

    const { product, product: { imageUrl, name, price }, quantity } = props.item

    const dispatch = useDispatch()

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div className='arrow' onClick={() => dispatch(removeItemFromCartAction(product))}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => dispatch(addItemToCartAction(product))}>
                    &#10095;
                </div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButton onClick={() => dispatch(clearItemFromCartAction(product))}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem