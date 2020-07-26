import React from 'react';
import './directory.styles.scss'
import { useSelector } from 'react-redux'

import { selectDirectorySections } from '../../redux/directory-selector'

import MenuItem from "../menu-item/menu-item";

const Directory = () => {

    const directorySections = useSelector(selectDirectorySections)

    return (
        <div>
            <div className='directory-menu'>{
                directorySections.map(section =>
                    <MenuItem key={section.id} {...section} />
                )
            }</div>
        </div>
    );
};

export default Directory;