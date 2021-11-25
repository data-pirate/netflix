import React, { useState } from 'react'
import Icon from '@mdi/react'
import { mdiStar, mdiMotionPlay, mdiThumbUp, mdiThumbDown, mdiCloseThick } from '@mdi/js'

function ListItem(props) {
    const [isHovered, setisHovered] = useState(false);
    const icons = [mdiMotionPlay, mdiThumbUp, mdiThumbDown, mdiCloseThick];

    const trailer = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4";
    return (
        <li className="list-item" key={props.key}
            onMouseEnter={() => { setisHovered(true) }}
            onMouseLeave={() => { setisHovered(false) }}
        >
            {
                isHovered ? (
                    <>
                        <div className="hover-visible">
                            <video src={trailer} autoPlay={true} loop />
                            <div className="hover-controls">
                                {icons.map(path => {
                                    return (
                                        <Icon
                                            path={path}
                                            size={1}
                                            color="orange"
                                            className="hover-control-icon"
                                        />
                                    )
                                })}
                                <p className="info">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia autem molestias exercitationem! Illum voluptates maxime neque non, in accusantium dolorum recusandae iure eum. Numquam, maxime? Tenetur iste earum autem quod incidunt!
                                </p>
                            </div>
                        </div>
                    </>
                ) :
                    <>
                        <img src={props.image} alt={props.title} />
                        <div className="rating-and-season">
                            <div className="rating">
                                <Icon
                                    path={mdiStar}
                                    size={1}
                                    color="gold"
                                    name="Rating"
                                    className="rating-logo"
                                />
                                {props.rating}/10
                            </div>

                            <div className="seasons">
                                {
                                    props.type === "series" ? `${props.seasons} seasons` : 'Movie'
                                }
                            </div>
                        </div>
                        <div className="movie-title">
                            <p>
                                {props.title}
                            </p>
                        </div>
                    </>
            }
        </li>
    )
}

export default ListItem
