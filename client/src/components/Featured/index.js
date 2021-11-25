import React from 'react'
import './featured.css'

import Icon from '@mdi/react'
import { mdiMotionPlayOutline} from '@mdi/js';

import peaky from '../../images/peaky_blinders.jpg'
import Thumbnails from './Thumbnails';


const thumbnails = [
    {
        src: "https://wallpapercave.com/wp/wp1890589.jpg",
        name: "peaky blinders"
    },
    {
        src: "https://wallpapercave.com/wp/wp1890589.jpg",
        name: "peaky blinders"
    },
    {
        src: "https://wallpapercave.com/wp/wp1890589.jpg",
        name: "peaky blinders"
    },
    {
        src: "https://wallpapercave.com/wp/wp1890589.jpg",
        name: "peaky blinders"
    }
]


function Featured() {

    // const ref = useRef(null);

    // async function animate(ref, speed) {
    //     for(let i = 1; i <= speed; i++){
    //         ref.current.scrollLeft += 1;
    //         await new Promise((resolve) => {setTimeout(() => {
    //             resolve('')
    //         }, 1);})
    //     }
    // }
    // function scroll() {
    //     let maxScrollLeft = ref.current.scrollWidth - ref.current.clientWidth;

    //     if(ref.current.scrollLeft + 100 <= maxScrollLeft){
    //         animate(ref, 150);
    //     }else{
    //         ref.current.scrollLeft = 0
    //     }
    // }

    return (
        <div className="featured">
            <img
            className = "featured-poster"
            src = {peaky}
            alt = "peaky blinders"
            />

            <div className="info">
                <div className="title-and-season">
                    <span className="season">Season 1</span>
                    <span className="title">Peaky Blinders</span>
                    <button className="watch-now">
                        <Icon 
                        path={ mdiMotionPlayOutline }
                        title="Play"
                        color="white"
                        size = {1}
                        />
                        Watch now
                    </button>
                </div>
                <Thumbnails thumbs = { thumbnails }/>
                {/* <div className="thumbs" ref = {ref}>
                    <iframe className="trailer m-l-1" width="560" height="315" src="https://www.youtube.com/embed/oVzVdvGIC7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <img className="thumbnail m-l-1" src="https://wallpapercave.com/wp/wp1890589.jpg" alt="peaky blinders thumbnail" />
                    <img className="thumbnail m-l-1" src="https://wallpapercave.com/wp/wp1890589.jpg" alt="peaky blinders thumbnail" />
                    <img className="thumbnail m-l-1" src="https://wallpapercave.com/wp/wp1890589.jpg" alt="peaky blinders thumbnail" />
                    <img className="thumbnail m-l-1" src="https://wallpapercave.com/wp/wp1890589.jpg" alt="peaky blinders thumbnail" />
                    <img className="thumbnail m-l-1" src="https://wallpapercave.com/wp/wp1890589.jpg" alt="peaky blinders thumbnail" />
                    <img className="thumbnail m-l-1" src="https://wallpapercave.com/wp/wp1890589.jpg" alt="peaky blinders thumbnail" />
                </div> */}
                    {/* <Icon 
                    path= {mdiChevronRight}
                    size = {1.4}
                    color = "tomato"
                    title = "Next"
                    className = "next-button"
                    onClick = {() => scroll()}
                    /> */}
            </div>
        </div>
    )
}

export default Featured
