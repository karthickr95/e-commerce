import React, { useEffect } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import CollectionOverview from '../components/collections-overview/collection-overview'
import CollectionPage from './collection-page'
import withSpinner from '../components/hoc/with-spinner/with-spinner'

import { fetchCollectionsStartAsync } from '../redux/shop/actions'
import { selectIsCollectionFetching } from '../redux/shop/shop-selector'

const ShopPage = ({ match }: RouteComponentProps) => {

    const isCollectionsFetching = useSelector(selectIsCollectionFetching)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCollectionsStartAsync())
    }, [])

    const CollectionOverviewWithSpinner = withSpinner(CollectionOverview)
    const CollectionPageWithSpinner = withSpinner(CollectionPage)

    return (
        <div>
            <Route
                exact
                path={`${match.path}`}
                render={(props) =>
                    <CollectionOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />
                }
            />
            <Route
                path={`${match.path}/:collectionId`}
                render={(props) =>
                    <CollectionPageWithSpinner isLoading={isCollectionsFetching} {...props} />
                }
            />
        </div>
    )
}

export default ShopPage