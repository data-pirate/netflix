import React, {useRef} from 'react'
import Icon from '@mdi/react'
import { mdiChevronRight } from '@mdi/js';



function Thumbnails(props) {
    const ref = useRef(null);
    
    function scroll() {
        let maxScrollLeft = ref.current.getBoundingClientRect().x;
        ref.current.style.transform = `translateX(-${maxScrollLeft -300}px)`
    }


    return (
        <div className="thumbs">
                <div className="slider" ref = {ref}>
                    {props.thumbs.map((thumb) =>{
                        return (
                            <div>
                                <img className="thumbnail m-l-1" src= {thumb.src} alt= {thumb.name} />
                            </div>
                        )
                    })}
                </div>
                <Icon 
                    path= {mdiChevronRight}
                    size = {1.4}
                    color = "tomato"
                    title = "Next"
                    className = "next-button thumb-child"
                    onClick = {scroll}
                />
        </div>
    )
}

export default Thumbnails
