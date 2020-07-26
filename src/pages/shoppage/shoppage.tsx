import React from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'

import CollectionOverview from '../../components/collections-overview/collection-overview'
import CollectionPage from '../collection-page/collection-page'

const ShopPage = ({ match }: RouteComponentProps) => {

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )

}

export default ShopPage