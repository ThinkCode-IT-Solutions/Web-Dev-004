let Header = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <div className="header">
        <div className="header-left">
          <h1>Good morning, Shahzad! 👋</h1>
          <p className="header-date">{currentDate}</p>
        </div>
        <div className="header-right">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search tasks, projects..."
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          <button className="add-task-btn">+ Add Task</button>
          <div className="notification-bell">🔔</div>
        </div>
      </div>
    </>
  );
};
export default Header;
