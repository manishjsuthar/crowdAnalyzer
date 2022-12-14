import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline
} from "@material-ui/icons";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>

          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/capture" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Capture
              </li>
            </Link>
            {/* <Link to="/recent" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Recent List
              </li>
            </Link> */}
          </ul>
        </div>



      </div>
    </div>
  );
}
