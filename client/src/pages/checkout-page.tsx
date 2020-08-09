import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { selectCartItems, selectCartTotalPrice } from '../redux/cart/cart-selector'

import CheckoutItem from '../components/checkout-item/checkout-item'
import StripeCheckoutButton from '../components/stripe-checkout-button/stripe-checkout-button'

const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 50px;
  }
`

const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`

const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`

const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`

const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`

const CheckoutPage = () => {

    const cartItems = useSelector(selectCartItems)
    const cartTotalPrice = useSelector(selectCartTotalPrice)

    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer><span>Product</span></HeaderBlockContainer>
                <HeaderBlockContainer><span>Description</span></HeaderBlockContainer>
                <HeaderBlockContainer><span>Quantity</span></HeaderBlockContainer>
                <HeaderBlockContainer><span>Price</span></HeaderBlockContainer>
                <HeaderBlockContainer><span>Remove</span></HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {
                cartItems.map(item =>
                    <CheckoutItem key={item.product.id} item={item} />
                )
            }
            <TotalContainer>TOTAL: &#x20B9;{cartTotalPrice}</TotalContainer>
            <WarningContainer>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
            </WarningContainer>
            <StripeCheckoutButton price={cartTotalPrice} />
        </CheckoutPageContainer>
    )
}

export default CheckoutPage