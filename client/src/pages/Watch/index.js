import { mdiArrowLeftCircle } from '@mdi/js'
import Icon from '@mdi/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import './watch.css'


function Watch() {
    const location = useLocation();
    const { id } = location.state;
    const [movieSrc, setMovieSrc] = useState(null);
    const [movieName, setMovieName] = useState(null);

    useEffect(()=>{
        let mounted = true;
        const getMovie = async ()=>{
            try{
                const response = await axios.get('/api/movies/' + id, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYThhZTFjMGFiOTUxMGU2ZmFmN2I2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTU2MDUxOSwiZXhwIjoxNjQwMTY1MzE5fQ.IDinyge3-6KBdkicL1YneMc5-SZz0HbJ-ihnOZi68IA"
                    }
                })
                if(mounted){
                    setMovieSrc(response.data.src);
                    setMovieName(response.data.title)
                }
            }catch(err){
                console.log(err);
            }
        }
        getMovie();
        return () => mounted = false;
    }, [id])


    return (
        <div className="watch">
                <div className="back">
            <Link to='/'>
                    <Icon 
                    path = {mdiArrowLeftCircle}
                    size = {1}
                    color = "white"
                    />
            </Link>
                </div>  
            <video className='fullvideo' src={movieSrc} autoPlay={false} controls={true} controlsList="nodownload" progress="true"></video>
        </div>
    )
}

export default Watch
