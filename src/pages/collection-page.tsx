import React from 'react'
import styled from 'styled-components'
import { RouteComponentProps } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectCollection } from '../redux/shop-selector'

import CollectionItem from '../components/collection-item/collection-item'

const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`

const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 30px;
  }
`

type MatchParams = {
    collectionId: string
}

const CollectionPage = ({ match }: RouteComponentProps<MatchParams>) => {

    const collection = useSelector(selectCollection(match.params.collectionId))

    return (
        <CollectionPageContainer>
            <CollectionTitle>{collection?.title}</CollectionTitle>
            <CollectionItemsContainer>
                {
                    collection
                        ?.items
                        .map(item =>
                            <CollectionItem key={item.id} product={item} />
                        )
                }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}

export default CollectionPage