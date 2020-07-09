import React from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom'
import './menu-item.styles.scss'

type MenuItemProps = {
    id: number
    title: string,
    imageUrl: string,
    size?: string | undefined,
    linkUrl: string
}

const MenuItem = (props: MenuItemProps & RouteComponentProps) => {

    const {title, imageUrl, size, linkUrl, history, match} = props

    return (
        <div
            className={`menu-item ${size}`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)