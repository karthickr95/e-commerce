import React, { useEffect, useState } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import CollectionOverview from '../components/collections-overview/collection-overview'
import CollectionPage from './collection-page'
import withSpinner from '../components/hoc/with-spinner/with-spinner'

import { firestore, getCollectionsFromCollectionsSnapshot } from '../firebase/firebase-utils'

import { updateCollectionsAction } from '../redux/shop/actions'

const ShopPage = ({ match }: RouteComponentProps) => {

    const dispatch = useDispatch()

    const [isLoading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const collectionRef = firestore.collection('collections')
        collectionRef.get().then(snapshot => {
            const collectionsMap = getCollectionsFromCollectionsSnapshot(snapshot)
            dispatch(updateCollectionsAction(collectionsMap))
            setLoading(false)
        })

    }, [])

    const CollectionOverviewWithSpinner = withSpinner(CollectionOverview)
    const CollectionPageWithSpinner = withSpinner(CollectionPage)

    return (
        <div>
            <Route
                exact
                path={`${match.path}`}
                render={(props) =>
                    <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
                }
            />
            <Route
                path={`${match.path}/:collectionId`}
                render={(props) =>
                    <CollectionPageWithSpinner isLoading={isLoading} {...props} />
                }
            />
        </div>
    )

}

export default ShopPage