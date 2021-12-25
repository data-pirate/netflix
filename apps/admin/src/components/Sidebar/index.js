import React from "react";
import Icon from "@mdi/react";
import {
  mdiHomeCircleOutline,
  mdiGoogleAnalytics,
  mdiTrendingUp,
  mdiAccountCircleOutline,
  mdiMovieOpen,
  mdiClipboardList,
  mdiShieldCrownOutline,
  mdiAt,
  mdiCommentQuoteOutline,
  mdiMessageTextOutline,
  mdiBriefcaseOutline,
  mdiChartTimelineVariant,
  mdiAlertOctagon
} from "@mdi/js";

import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <h3 className="menu-title">Dashboard</h3>
        <ul className="menu-list">
          <li className="list-item active">
            <Icon
              path={mdiHomeCircleOutline}
              title="notification"
              size={1}
              color="black"
            />
            <div className="page-title"><Link to='/'>Home</Link></div>
          </li>
          <li className="list-item">
            <Icon
              path={mdiGoogleAnalytics}
              title="notification"
              size={1}
              color="black"
            />
            <div className="page-title">Analytics</div>
          </li>
          <li className="list-item">
            <Icon
              path={mdiTrendingUp}
              title="notification"
              size={1}
              color="black"
            />
            <div className="page-title">Sales</div>
          </li>
        </ul>
      </div>

      {/* second side bar menu */}
      <div className="sidebar-menu">
        <h3 className="menu-title">Quick Menu</h3>
        <ul className="menu-list">
          <li className="list-item">
            <Icon
              path={mdiAccountCircleOutline}
              title="notification"
              size={1}
              color="black"
            />
            <div className="page-title"><Link to='/users'>Users</Link></div>
          </li>
          <li className="list-item">
            <Icon
              path={mdiMovieOpen}
              title="notification"
              size={1}
              color="black"
            />
            <div className="page-title">Movies and Series</div>
          </li>
          <li className="list-item">
            <Icon
              path={mdiClipboardList}
              title="notification"
              size={1}
              color="black"
            />
            <div className="page-title">Lists</div>
          </li>
          <li className="list-item">
            <Icon
              path={mdiShieldCrownOutline}
              title="notification"
              size={1}
              color="black"
            />
            <div className="page-title">Admins</div>
          </li>
        </ul>
      </div>

      {/* third side bar menu */}
      <div className="sidebar-menu">
        <h3 className="menu-title">Notifications</h3>
        <ul className="menu-list">
          <li className="list-item">
            <Icon
              path={mdiAt}
              title="notification"
              size={1}
              color="black"
            />
            <div className="page-title">Mail</div>
          </li>
          <li className="list-item">
            <Icon
              path={mdiCommentQuoteOutline}
              title="notification"
              size={1}
              color="black"
            />
            <div className="page-title">Feedback</div>
          </li>
          <li className="list-item">
            <Icon
              path={mdiMessageTextOutline}
              title="notification"
              size={1}
              color="black"
            />
            <div className="page-title">Messages</div>
          </li>
        </ul>
      </div>


      {/* fourth side bar menu */}
      <div className="sidebar-menu">
        <h3 className="menu-title">Staff</h3>
        <ul className="menu-list">
          <li className="list-item">
            <Icon
              path={mdiBriefcaseOutline}
              title="notification"
              size={1}
              color="black"
            />
            <div className="page-title">Manage</div>
          </li>
          <li className="list-item">
            <Icon
              path={mdiChartTimelineVariant}
              title="notification"
              size={1}
              color="black"
            />
            <div className="page-title">Analytics</div>
          </li>
          <li className="list-item">
            <Icon
              path={mdiAlertOctagon}
              title="notification"
              size={1}
              color="black"
            />
            <div className="page-title">Reports</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
