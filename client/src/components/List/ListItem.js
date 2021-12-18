import React, { useEffect, useState, useRef } from 'react'
import Icon from '@mdi/react'
import { mdiStar, mdiMotionPlay, mdiThumbUp, mdiThumbDown, mdiCloseThick } from '@mdi/js'
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListItem(props) {
    const [isHovered, setisHovered] = useState(false);
    const icons = [mdiMotionPlay, mdiThumbUp, mdiThumbDown, mdiCloseThick];
    const [movie, setMovie] = useState(null);

    
    useEffect(()=>{
        let mounted = true;
        const getMovie = async ()=>{
            try{
                const response = await axios.get('/api/movies/' + props.id, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYThhZTFjMGFiOTUxMGU2ZmFmN2I2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTU2MDUxOSwiZXhwIjoxNjQwMTY1MzE5fQ.IDinyge3-6KBdkicL1YneMc5-SZz0HbJ-ihnOZi68IA"
                    }
                })
                if(mounted){
                    setMovie(response.data);
                }
            }catch(err){
                console.log(err);
            }
        }
        getMovie();
        return () => mounted = false;
    }, [props.id])

    return (
        <Link to='/watch'
            state= {{id: props.id}}
        >
        <li className="list-item"
            key={props.id + 'xyz'}
            onMouseEnter={() => { setisHovered(true) }}
            onMouseLeave={() => { setisHovered(false) }}
        >
            {
                isHovered ? (
                    <>
                        <div className="hover-visible">
                            <video src={movie.trailer} autoPlay={true} loop />
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
                ) : movie !== null ?
                    <>
                        <img src={movie.poster} alt={movie.title} />
                        <div className="rating-and-season">
                            <div className="rating">
                                <Icon
                                    path={mdiStar}
                                    size={1}
                                    color="gold"
                                    name="Rating"
                                    className="rating-logo"
                                />
                                {movie.imdb.rating}/10
                            </div>

                            <div className="seasons">
                                {
                                    movie.type === "series" ? `X seasons` : 'Movie'
                                }
                            </div>
                        </div>
                        <div className="movie-title">
                            <p>
                                {movie.title}
                            </p>
                        </div>
                    </>
                : <></>
            }
        </li>
        </Link>
    )
}

export default ListItem
