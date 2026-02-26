import "./TopNavTasks.css";
import { useNavigate } from "react-router-dom";

function TopNavTasks({ onAddClick }) {
  return (
    <header className="tasks-topbar">
      <h1>Tasks</h1>

      <div className="tasks-top-icons">
        <i className="fas fa-plus" onClick={onAddClick}></i>
        <i className="fa-regular fa-bell"></i>
      </div>
    </header>
  );
}

export default TopNavTasks;
