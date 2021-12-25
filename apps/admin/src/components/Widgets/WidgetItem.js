import { mdiCancel } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";

function WidgetItem({name}) {
  return (
    <li className="widget-list-item">
      <div className="user-details">
        <img
          className="widget-thumbnails"
          src="https://images.pexels.com/photos/9523600/pexels-photo-9523600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="new joins"
        />
        <span className="user-name">{name}</span>
      </div>
      <button className="ban">
        <Icon path={mdiCancel} size={0.7} color="white" />
        Ban
      </button>
    </li>
  );
}

export default WidgetItem;
