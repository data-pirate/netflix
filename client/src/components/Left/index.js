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
          `lists${props.type ? "?type=" + props.type : ""}${
            props.genre ? "&?genre=" + props.genre : ""
          }`,
        );
      } catch (err) {
          console.log(err);
      }

    //   responsr
    }
    getFeaturedLists();
  }, [props.genre, props.type]);

  // console.log(leftBox.current)

  return (
    <div className={`left ${props.loggedIn ? "logged-in" : ""}`}>
      <Header loggedIn={props.loggedIn} />
      <Featured />

      <List type={props.type} listName="Continue Watching" />
      <ColoredLine color="orange" />
      <List type={props.type} listName="Popular on Netflix" />
      <ColoredLine color="orange" />
    </div>
  );
}

export default Left;
