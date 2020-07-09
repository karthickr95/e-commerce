import React from 'react';
import './menu-item.styles.scss'

type MenuItemProps = {
    title: string,
    imageUrl: string,
    size: string | undefined
}

const MenuItem = ({title, imageUrl, size}: MenuItemProps) => {
    return (
        <div className={`menu-item ${size}`}>
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
};

export default MenuItem;