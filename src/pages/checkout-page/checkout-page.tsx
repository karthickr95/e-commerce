import React from 'react'
import './checkout-page.styles.scss'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart-selector'

import CheckoutItem from '../../components/checkout-item/checkout-item'
import StripeCheckoutButton from '../../components/stripe-checkout-button/stripe-checkout-button'

const CheckoutPage = () => {

    const cartItems = useSelector(selectCartItems)
    const cartTotalPrice = useSelector(selectCartTotalPrice)

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item =>
                    <CheckoutItem key={item.product.id} item={item} />
                )
            }
            <div className='total'>TOTAL: &#x20B9;{cartTotalPrice}</div>
            <div className='test-warning'>
                *Please use the following test credit card for payments*
                <br/>
                4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
            </div>
            <StripeCheckoutButton price={cartTotalPrice} />
        </div>
    )
}

export default CheckoutPage