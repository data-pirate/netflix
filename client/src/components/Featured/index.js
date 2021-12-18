import React, { useEffect, useState } from "react";
import "./featured.css";

import Icon from "@mdi/react";
import { mdiMotionPlayOutline } from "@mdi/js";

import peaky from "../../images/peaky_blinders.jpg";
import Thumbnails from "./Thumbnails";
import axios from "axios";

const thumbnails = [
  {
    src: "https://wallpapercave.com/wp/wp1890589.jpg",
    name: "peaky blinders",
  },
  {
    src: "https://wallpapercave.com/wp/wp1890589.jpg",
    name: "peaky blinders",
  },
  {
    src: "https://wallpapercave.com/wp/wp1890589.jpg",
    name: "peaky blinders",
  },
  {
    src: "https://wallpapercave.com/wp/wp1890589.jpg",
    name: "peaky blinders",
  },
];

function Featured() {
  const [featured, setFeatured] = useState({});

  useEffect(()=>{
    const getMovie = async ()=>{
        try{
            const response = await axios.get('/api/movies/featured', {
                headers: {
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYThhZTFjMGFiOTUxMGU2ZmFmN2I2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTU2MDUxOSwiZXhwIjoxNjQwMTY1MzE5fQ.IDinyge3-6KBdkicL1YneMc5-SZz0HbJ-ihnOZi68IA"
                }
            })
            console.log(response);
            setFeatured(response.data[0]);
        }catch(err){
            console.log(err);
        }
    }
    getMovie();
}, [])

  return (
    <div className="featured">
      <img className="featured-poster" src={featured.poster} alt={featured.title} />

      <div className="info">
        <div className="title-and-season">
            {featured.type === "series"? <span className="season">Season 1</span>: <></>}
          <span className="title">{featured.title}</span>
          <button className="watch-now">
            <Icon
              path={mdiMotionPlayOutline}
              title="Play"
              color="white"
              size={1}
            />
            Watch now
          </button>
        </div>
        <Thumbnails key="thumbs" thumbs={thumbnails} />
      </div>
    </div>
  );
}

export default Featured;
