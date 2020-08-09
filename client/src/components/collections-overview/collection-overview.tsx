import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import CollectionPreview from '../collection-preview/collection-preview'

import { selectShopCollectionsForPreview } from '../../redux/shop/shop-selector'
import { RouteComponentProps } from 'react-router-dom'

const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const CollectionOverview = (props: RouteComponentProps) => {

    const collections = useSelector(selectShopCollectionsForPreview)

    return (
        <CollectionsOverviewContainer>
            {
                collections.map((collection) => (
                    <CollectionPreview
                        key={collection.id}
                        title={collection.title}
                        items={collection.items}
                        routeName={collection.routeName}
                        {...props}
                    />
                ))
            }
        </CollectionsOverviewContainer>
    )
}

export default CollectionOverview