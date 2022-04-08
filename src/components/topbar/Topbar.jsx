import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topBarLeft">
        <span className="logo">Davidsocial</span>
      </div>
      <div className="topBarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friends, posts and videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">Homepage</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <PersonIcon />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <ChatIcon />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <NotificationsNoneIcon />
            <span className="topBarIconBadge">1</span>
          </div>
        </div>

        <img src="/assets/person/1.png" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
