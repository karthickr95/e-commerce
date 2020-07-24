import React from 'react'

import CollectionItem from '../collection-item/collection-item'

import './collection-preview.styles.scss'
import { Product } from '../../types/types'

type CollectionPreviewProps = {
    title: string,
    items: Product[]
}

const CollectionPreview = ({ title, items }: CollectionPreviewProps) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {
                    items
                        .filter((item, index) => index < 4)
                        .map(item => (
                            <CollectionItem key={item.id} product={item} />
                        ))}
            </div>
        </div>
    )
}

export default CollectionPreview