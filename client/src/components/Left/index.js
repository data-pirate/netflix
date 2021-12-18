// import Featured from './Featured';
import axios from "axios";
import { useEffect, useState } from "react";
import Featured from "../Featured";
import Header from "../Header";
import List from "../List";
import "./left.css";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      marginTop: 1,
      height: 1,
      color: color,
      backgroundColor: color,
    }}
  />
);
function Left(props) {
  // const leftBox = useRef(null);
  const [featuredLists, setFeaturedLists] = useState([]);

  useEffect(() => {
    async function getFeaturedLists() {
      try {
        const response = await axios.get(
          `/api/lists${props.type ? "?type=" + props.type : ""}${props.genre ? "&?genre=" + props.genre : ""}`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYThhZTFjMGFiOTUxMGU2ZmFmN2I2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTU2MDUxOSwiZXhwIjoxNjQwMTY1MzE5fQ.IDinyge3-6KBdkicL1YneMc5-SZz0HbJ-ihnOZi68IA",
            },
          }
        );
        setFeaturedLists(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getFeaturedLists();
  }, [props.genre, props.type]);

  return (
    <div className={`left ${props.loggedIn ? "logged-in" : ""}`}>
      <Header key = "header" loggedIn={props.loggedIn} />
      <Featured key= "featured"/>
      {
        featuredLists.map((each) => {
          return (<>
            <List key = {each.title} type={each.type} listName={`${each.title}`} content = {each.content}/>
            <ColoredLine key={each.title + 1} color="orange" />
            </>
          )
        })
      }
    </div>
  );
}

export default Left;
