import React from 'react'
import { useDispatch } from 'react-redux'

import './checkout-item.styles.scss'

import { CartProduct } from '../../types/types'
import { removeItemFromCartAction, clearItemFromCartAction, addItemToCartAction } from '../../redux/actions'

type CheckoutItemProps = {
    item: CartProduct
}

const CheckoutItem = (props: CheckoutItemProps) => {

    const { product, product: { imageUrl, name, price }, quantity } = props.item

    const dispatch = useDispatch()

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <div className='arrow' onClick={() => dispatch(removeItemFromCartAction(product))}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => dispatch(addItemToCartAction(product))}>
                    &#10095;
                </div>
            </div>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => dispatch(clearItemFromCartAction(product))}>
                &#10005;
            </div>
        </div>
    )
}

export default CheckoutItem