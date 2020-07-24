import React from 'react'
import { useDispatch } from 'react-redux'
import './collection-item.styles.scss'

import CustomButton from '../custom-button/custom-button'
import { Product } from '../../types/types'
import { addItemToCartAction } from '../../redux/actions'

type CollectionItemProps = {
    product: Product
}

const CollectionItem = (props: CollectionItemProps) => {

    const { imageUrl, name, price } = props.product

    const dispatch = useDispatch()

    return (
        <div className='collection-item'>
            <div className='image' style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton
                inverted
                onClick={() => dispatch(addItemToCartAction(props.product))
                }>
                ADD TO CART
            </CustomButton>
        </div>
    )
}

export default CollectionItem