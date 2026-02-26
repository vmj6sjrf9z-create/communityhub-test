import React from "react";
import "./TopNavHome.css";
import { useUser } from "../../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";

const TopNavHome = () => {
  const user = useUser().user;
  const avatarUrl =
    user?.user_metadata?.avatar_url || "https://i.pravatar.cc/100";

  const navigate = useNavigate();

  return (
    <header className="topbar">
      <div onClick={() => navigate("/profile")}>
        <img src={avatarUrl} alt="Avatar" className="avatar" />
        <p>Profile</p>
      </div>
      <div className="bell">
        <i className="fa-regular fa-bell"></i>
      </div>
    </header>
  );
};

export default TopNavHome;
