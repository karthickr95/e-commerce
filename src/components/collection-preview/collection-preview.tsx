import React from 'react';

import CollectionItem from "../collection-item/collection-item";

import './collection-preview.styles.scss'

type CollectionPreviewProps = {
    title: string,
    items: {
        id: number,
        name: string,
        imageUrl: string,
        price: number
    }[]
}

const CollectionPreview = ({title, items}: CollectionPreviewProps) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {
                    items
                        .filter((item, index) => index < 4)
                        .map(item => (
                            <CollectionItem key={item.id} {...item} />
                        ))}
            </div>
        </div>
    );
};

export default CollectionPreview;