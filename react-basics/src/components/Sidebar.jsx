let Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>✅ TodoMaster</h2>
        <p className="sidebar-subtitle">Organize your life</p>
      </div>

      <nav className="sidebar-nav">
        <a href="#" className="nav-item active">
          <span className="nav-icon">📊</span>
          Dashboard
        </a>
        <a href="#" className="nav-item">
          <span className="nav-icon">📝</span>
          My Tasks
        </a>
        <a href="#" className="nav-item">
          <span className="nav-icon">📋</span>
          Projects
        </a>
        <a href="#" className="nav-item">
          <span className="nav-icon">📅</span>
          Calendar
        </a>
        <a href="#" className="nav-item">
          <span className="nav-icon">📈</span>
          Analytics
        </a>
        <a href="#" className="nav-item">
          <span className="nav-icon">🗃️</span>
          Archive
        </a>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="user-avatar">S</div>
          <div className="user-info">
            <span className="user-name">Shahzad</span>
            <span className="user-email">shahzad@example.com</span>
          </div>
        </div>
        <a href="#" className="nav-item">
          <span className="nav-icon">⚙️</span>
          Settings
        </a>
      </div>
    </div>
  );
};


export default Sidebar;
