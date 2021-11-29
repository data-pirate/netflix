import React from "react";
import { Link, Outlet } from "react-router-dom";

function Links(props) {
  return (
      <>
      <Link to={`/${props.src}`}>{props.name}</Link>
      <Outlet/>
      </>
  );
}

export default Links;
