import React from "react";
// import Icon from "@mdi/react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <h3 className="menu-title">Dashboard</h3>
        <ul className="menu-list">
          <li className="list-item">
            {/* <Icon
              path={}
              title="notification"
              size={1}
              color="black"
            /> */}
            <span className="notification-badge">2</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
