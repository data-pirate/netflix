import React from "react";
import Icon from '@mdi/react';
import { mdiBellOutline, mdiTranslate, mdiCogOutline } from "@mdi/js";
import "./topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="left">
          <span className="logo">Netflix Admin</span>
        </div>
        <div className="right">
          <div className="header-logo">
            <Icon
              path={mdiBellOutline}
              title="notification"
              size={1}
              color="black"
            />
            <span className="notification-badge">2</span>
          </div>
          <div className="header-logo">
            <Icon
              path={mdiTranslate}
              title="language"
              size={1}
              color="black"
            />
          </div>
          <div className="header-logo">
            <Icon
              path={mdiCogOutline}
              title="settings"
              size={1}
              color="black"
            />
          </div>

          {/* profile photo */}
          <div className="profile-pic">
            <img src="https://images.pexels.com/photos/9132747/pexels-photo-9132747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile" className="profilepic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
