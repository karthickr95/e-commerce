import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { selectDirectorySections } from '../../redux/directory/directory-selector'

import MenuItem from '../menu-item/menu-item'

const DirectoryMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Directory = () => {

    const directorySections = useSelector(selectDirectorySections)

    return (
        <DirectoryMenuContainer>
            {
                directorySections.map(section =>
                    <MenuItem key={section.id} {...section} />
                )
            }
        </DirectoryMenuContainer>
    )
}

export default Directory