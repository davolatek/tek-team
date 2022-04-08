import React from "react";
import "./sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkIcon from "@mui/icons-material/Work";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SchoolIcon from "@mui/icons-material/School";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <RssFeedIcon className="sidebar-icon" />
            <span className="sidebar-listitem-text">Feeds</span>
          </li>
          <li className="sidebar-list-item">
            <ChatIcon className="sidebar-icon" />
            <span className="sidebar-listitem-text">Chats</span>
          </li>
          <li className="sidebar-list-item">
            <VideoLibraryIcon className="sidebar-icon" />
            <span className="sidebar-listitem-text">Videos</span>
          </li>
          <li className="sidebar-list-item">
            <GroupIcon className="sidebar-icon" />
            <span className="sidebar-listitem-text">Groups</span>
          </li>
          <li className="sidebar-list-item">
            <BookmarkBorderIcon className="sidebar-icon" />
            <span className="sidebar-listitem-text">Bookmarks</span>
          </li>
          <li className="sidebar-list-item">
            <HelpOutlineIcon className="sidebar-icon" />
            <span className="sidebar-listitem-text">Questions</span>
          </li>
          <li className="sidebar-list-item">
            <WorkIcon className="sidebar-icon" />
            <span className="sidebar-listitem-text">Jobs</span>
          </li>
          <li className="sidebar-list-item">
            <EventAvailableIcon className="sidebar-icon" />
            <span className="sidebar-listitem-text">Events</span>
          </li>
          <li className="sidebar-list-item">
            <SchoolIcon className="sidebar-icon" />
            <span className="sidebar-listitem-text">Courses</span>
          </li>
        </ul>
        <button className="sidebar-button">Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebar-friend-list">
            <li className="sidebar-friend">
                <img src="/assets/person/5.jpg" alt="" className="sidebar-friend-img" />
                <span className="sidebar-friend-name">Jane Doe</span>
            </li>
            <li className="sidebar-friend">
                <img src="/assets/person/5.jpg" alt="" className="sidebar-friend-img" />
                <span className="sidebar-friend-name">Jane Doe</span>
            </li>
            <li className="sidebar-friend">
                <img src="/assets/person/5.jpg" alt="" className="sidebar-friend-img" />
                <span className="sidebar-friend-name">Jane Doe</span>
            </li>
            <li className="sidebar-friend">
                <img src="/assets/person/5.jpg" alt="" className="sidebar-friend-img" />
                <span className="sidebar-friend-name">Jane Doe</span>
            </li>
            <li className="sidebar-friend">
                <img src="/assets/person/5.jpg" alt="" className="sidebar-friend-img" />
                <span className="sidebar-friend-name">Jane Doe</span>
            </li>
            <li className="sidebar-friend">
                <img src="/assets/person/5.jpg" alt="" className="sidebar-friend-img" />
                <span className="sidebar-friend-name">Jane Doe</span>
            </li>
            <li className="sidebar-friend">
                <img src="/assets/person/5.jpg" alt="" className="sidebar-friend-img" />
                <span className="sidebar-friend-name">Jane Doe</span>
            </li>
        </ul>
      </div>
    </div>
  );
}
