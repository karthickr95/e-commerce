import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCollection } from '../../redux/shop-selector'

import './collection-page.styles.scss'

import CollectionItem from '../../components/collection-item/collection-item'

type MatchParams = {
    collectionId: string
}

const CollectionPage = ({ match }: RouteComponentProps<MatchParams>) => {

    const collection = useSelector(selectCollection(match.params.collectionId))

    return (
        <div className='collection-page'>
            <h2 className='title'>{collection?.title}</h2>
            <div className='items'>
                {
                    collection?.items.map(item => (<CollectionItem key={item.id} product={item} />))
                }
            </div>
        </div>
    )
}

export default CollectionPage