import React from 'react'
import "./styles.css"

import Icon from '@mdi/react'
import { mdiMagnify, mdiBellOutline } from '@mdi/js';

function Search() {
    return (
        <div className="search-and-notifications">
            <Icon
            path = { mdiMagnify }
            color = "white"
            size = {1.3}
            title = "search"
            className = "search"
            />

            <Icon 
                path= { mdiBellOutline }
                size = {1}
                color = "white"
                title = "notifications"
                className="notifications"
            />
        </div>
    )
}

export default Search
