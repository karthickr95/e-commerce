import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { Product } from '../../types/types'

import { addItemToCartAction } from '../../redux/cart/actions'

import { InvertedButton } from '../button/button'

const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`

const AddButton = styled(InvertedButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`

const BackgroundImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`

const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`

type CollectionItemProps = {
    product: Product
}

const CollectionItem = (props: CollectionItemProps) => {

    const { imageUrl, name, price } = props.product

    const dispatch = useDispatch()

    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton
                onClick={() => dispatch(addItemToCartAction(props.product))
                }>
                ADD TO CART
            </AddButton>
        </CollectionItemContainer>
    )
}

export default CollectionItem