import React from 'react'
import { useSelector } from 'react-redux'

import './collection-overview.styles.scss'

import CollectionPreview from '../collection-preview/collection-preview'
import { selectShopCollectionsForPreview } from '../../redux/shop-selector'

type CollectionOverviewProps = {}

const CollectionOverview = (props: CollectionOverviewProps) => {

    const collections = useSelector(selectShopCollectionsForPreview)

    return (
        <div className='collection-overview'>
            {
                collections.map((collection) => (
                    <CollectionPreview
                        key={collection.id}
                        title={collection.title}
                        items={collection.items}
                    />
                ))
            }
        </div>
    )
}

export default CollectionOverview