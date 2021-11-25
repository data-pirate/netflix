import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import "./style.css"
import Icon from '@mdi/react'
import React, { useRef, useEffect, useState } from 'react'
import ListItem from './ListItem'

const collection = [
    {
        title: "Black Mirror",
        image: "https://flxt.tmsimg.com/assets/p8952681_b_v13_ab.jpg",
        type: "series",
        genre: "sci-fi",
        seasons: 5,
        rating: 9,
        key: "black mirror"
    },
    {
        title: "Money Heist",
        image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/08/31/993600-mh.jpg",
        type: "series",
        genre: "thriller",
        seasons: 4,
        rating: 9,
        key: "money heist"
    },
    {
        title: "Peaky Blinders",
        image: "https://www.crew-united.com/Media/Images/1241/1241969/1241969.entity.jpg",
        type: "series",
        genre: "drama",
        seasons: 5,
        rating: 8.8,
        key: "peaky blinders"
    },
    {
        title: "The Queen's Gambit",
        image: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_.jpg",
        type: "series",
        genre: "drama",
        seasons: 1,
        rating: 8.6,
        key: "queens gambit"
    },
    {
        title: "Central Intelligence",
        image: "https://m.media-amazon.com/images/M/MV5BMjA2NzEzNjIwNl5BMl5BanBnXkFtZTgwNzgwMTEzNzE@._V1_.jpg",
        type: "movie",
        genre: "action comedy",
        seasons: 0,
        rating: 6.3,
        key: "ci"
    },
    {
        title: "House of Cards",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/House_of_Cards_season_3.png/250px-House_of_Cards_season_3.png",
        type: "series",
        genre: "drama",
        seasons: 6,
        rating: 8.7,
        key: "hoc"
    },
    {
        title: "The Crown",
        image: "https://flxt.tmsimg.com/assets/p12792950_b_v13_ad.jpg",
        type: "series",
        genre: "drama",
        seasons: 2,
        rating: 8.7,
        key: "crown"
    },
    {
        title: "The Witcher",
        image: "https://flxt.tmsimg.com/assets/p17580215_b_v13_ac.jpg",
        type: "series",
        genre: "fantasy",
        seasons: 2,
        rating: 8.2,
        key: "witcher"
    },
    {
        title: "Red Notice",
        image: "https://i.cdn.newsbytesapp.com/images/l33220210926111626.jpeg",
        type: "movie",
        genre: "action comedy",
        seasons: 0,
        rating: 6.4,
        key: "red notice"
    },
]

function List(props) {

    const list = useRef(null);
    const [slideNumber, setSlideNumber] = useState(0);

    function handleSlideButtonClick(direction) {

        let n = parseInt(collection.length / 4)
        let h = list.current.firstElementChild.offsetWidth + 100;
        let distance = list.current.getBoundingClientRect().x;
        if(direction === "next" && slideNumber < n){
            setSlideNumber(slideNumber + 1)
            list.current.style.transform = `translateX(${-(h * 2) + distance}px)`
        }else if(direction === "prev" && slideNumber > 0){
            // distance = 0;
            if(slideNumber === 1){
                distance = 0;
                list.current.style.transform = `translateX(${distance}px)`
            }else{
                list.current.style.transform = `translateX(${(h * 2) + distance}px)`
            }
            setSlideNumber(slideNumber - 1)
        }
    }

    return (
        <>
        <div className="list">
            <div className="list-head">
                <h1 className ="list-title" >{props.listName}</h1>
                <div className="controls">
                    <Icon 
                        path= {mdiChevronLeft}
                        size = {1.4}
                        color = "#5b5a5e"
                        title = "Next"
                        className = "prev-button"
                        onClick = {() => { handleSlideButtonClick("prev") }}
                    />
                    <Icon 
                        path= {mdiChevronRight}
                        size = {1.4}
                        color = "tomato"
                        title = "Next"
                        className = "next-button"
                        onClick = {() => { handleSlideButtonClick("next") }}
                    />
                </div>
            </div>
        </div>
            <ul className="list-items" ref = {list}>
                {
                    collection.map(each => <ListItem {...each} />)
                }
            </ul>
            </>
    )
}

export default List
