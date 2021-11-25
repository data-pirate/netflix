import { mdiArrowLeftCircle } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'
import './watch.css'


function Watch(props) {
    return (
        <div className="watch">
            <div className="back">
                <Icon 
                path = {mdiArrowLeftCircle}
                size = {1}
                color = "white"
                />
            </div>
            <video src={ props.src } progress autoPlay={false} controls={true} controlsList="nodownload" ></video>
        </div>
    )
}

export default Watch
