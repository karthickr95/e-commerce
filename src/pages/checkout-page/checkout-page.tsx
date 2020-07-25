import React from 'react'
import './checkout-page.styles.scss'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart-selector'

import CheckoutItem from '../../components/checkout-item/checkout-item'

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
            <div className='total'>
                <span>TOTAL: ${cartTotalPrice}</span>
            </div>
        </div>
    )
}

export default CheckoutPage