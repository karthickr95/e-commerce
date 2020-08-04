import React from 'react'
import styled from 'styled-components'

import CollectionItem from '../collection-item/collection-item'

import { Product } from '../../types/types'
import { RouteComponentProps } from 'react-router-dom'

const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

const TitleContainer = styled.h1`
  text-transform: uppercase;
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`

const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

type CollectionPreviewProps = {
    title: string,
    items: Product[]
    routeName: string
}

const CollectionPreview = ({ title, items, match, history, routeName  }: CollectionPreviewProps & RouteComponentProps) => {
    return (
        <CollectionPreviewContainer>
            <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title}</TitleContainer>
            <PreviewContainer>
                {
                    items
                        .filter((item, index) => index < 4)
                        .map(item => (
                            <CollectionItem key={item.id} product={item} />
                        ))
                }
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}

export default CollectionPreview