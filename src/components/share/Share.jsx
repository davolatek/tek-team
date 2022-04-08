import React from "react";
import "./share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import TagIcon from '@mui/icons-material/Tag';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkspacesIcon from '@mui/icons-material/Workspaces';


export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/7.jpg" alt="" className="shareTopImg" />
          <input
            placeholder="What's in your mind David?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <TagIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Topics</span>
            </div>
            <div className="shareOption">
              <GroupsIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Teams</span>
            </div>
            <div className="shareOption">
              <WorkspacesIcon htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Projects</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
