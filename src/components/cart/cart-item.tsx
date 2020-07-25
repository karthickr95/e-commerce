import React from 'react'

import './cart-item.styles.scss'
import { CartProduct } from '../../types/types'

type CartItemProps = {
    item: CartProduct
}

const CartItem = (props: CartItemProps) => {

    const { product: { imageUrl, name, price }, quantity } = props.item

    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item' />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem