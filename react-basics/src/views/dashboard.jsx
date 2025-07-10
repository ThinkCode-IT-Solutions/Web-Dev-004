import { useState } from "react";

let DashboardView = (props) => {

  let [counter, setCounter] = useState(6);
  let [name,setName] = useState("Shahzad");
  let count = 0;
  let buttonClicker = ()=>{
   setCounter((old) => {
    return old + 5;
   });
  }

  let changeName = (e)=>{
    setName(()=>{
      return e.target.value;
    })
  }
  // console.log(props.task)
  const taskList = props.task;
  const login = props.login;
  let loggedin = <h2> Undefined </h2>;
  if (props.login) {
    loggedin = <h2>User is loggedin </h2>;
  } else {
    loggedin = <h2>User is not loggedin </h2>;
  }
  return (
    <>
      <div className="content">
        {/* Dashboard Stats */}
        <div className="stats-grid">
          <div className="stat-card primary">
            <div className="stat-icon">📋</div>
            <div className="stat-content">
              <h3>Total Tasks</h3>
              <p className="stat-number">{counter}</p>
              <span className="stat-change">+3 from yesterday</span>
              <div>
                <button onClick={buttonClicker}>Increment</button>
              </div>
            </div>
          </div>
          <div className="stat-card success">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>Completed</h3>
              <p className="stat-number">{name}</p>
              <span className="stat-change">+8 today</span>
              <div>
                <input type="text" onChange={changeName} />
              </div>
            </div>
          </div>
          <div className="stat-card warning">
            <div className="stat-icon">⏰</div>
            <div className="stat-content">
              <h3>In Progress</h3>
              <p className="stat-number">{props.stats.inProgress}</p>
              <span className="stat-change">-2 from yesterday</span>
            </div>
          </div>
          <div className="stat-card danger">
            <div className="stat-icon">🚨</div>
            <div className="stat-content">
              <h3>Overdue</h3>
              <p className="stat-number">{props.stats.overdue}</p>
              <span className="stat-change">+1 from yesterday</span>
            </div>
          </div>
        </div>
        {/* <div>
          {login ? <h2>user is logged in </h2> : <h2>User is not logged in </h2>}
          <hr />
          <h2>{loggedin}</h2>
          <h2>Task for {props.name}</h2>
          <ul>
           
            {
              taskList.map((item , index) => {
                return <li key={index}> {item} </li>
              })
            }
            
            
            
          </ul>
        </div> */}

        {/* Main Content Grid */}
        <div className="dashboard-grid">
          {/* Today's Tasks */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2>Today's Tasks</h2>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="task-list">
              {props.stats.tasks.map((task, index) => {
                return (
                  <div key={index} className="task-item priority-high">
                    <div className="task-checkbox">
                      <input type="checkbox" id="task1" />
                      <label htmlFor="task1"></label>
                    </div>
                    <div className="task-content">
                      <h4>{task.title}</h4>
                      <p>{task.date}</p>
                    </div>
                    <div className="task-priority high">{task.priority}</div>
                  </div>
                );
              })}

              {/* <div className="task-item priority-medium">
                <div className="task-checkbox">
                  <input type="checkbox" id="task2" />
                  <label htmlFor="task2"></label>
                </div>
                <div className="task-content">
                  <h4>Team standup meeting</h4>
                  <p>Due at 2:00 PM • Development</p>
                </div>
                <div className="task-priority medium">Medium</div>
              </div>
              <div className="task-item priority-low completed">
                <div className="task-checkbox">
                  <input type="checkbox" id="task3" checked />
                  <label htmlFor="task3"></label>
                </div>
                <div className="task-content">
                  <h4>Update documentation</h4>
                  <p>Completed • Documentation</p>
                </div>
                <div className="task-priority low">Low</div>
              </div>
              <div className="task-item priority-medium">
                <div className="task-checkbox">
                  <input type="checkbox" id="task4" />
                  <label htmlFor="task4"></label>
                </div>
                <div className="task-content">
                  <h4>Client presentation prep</h4>
                  <p>Due tomorrow • Sales</p>
                </div>
                <div className="task-priority medium">Medium</div>
              </div> */}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2>Quick Actions</h2>
            </div>
            <div className="quick-actions">
              <button className="action-btn create">
                <span className="action-icon">➕</span>
                Create Task
              </button>
              <button className="action-btn project">
                <span className="action-icon">📁</span>
                New Project
              </button>
              <button className="action-btn team">
                <span className="action-icon">👥</span>
                Invite Team
              </button>
              <button className="action-btn report">
                <span className="action-icon">📊</span>
                Generate Report
              </button>
            </div>

            {/* Progress Chart */}
            <div className="progress-section">
              <h3>Weekly Progress</h3>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "72%" }}></div>
              </div>
              <p>36 of 50 tasks completed this week</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2>Recent Activity</h2>
            </div>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-avatar">👤</div>
                <div className="activity-content">
                  <p>
                    <strong>You</strong> completed "Design wireframes"
                  </p>
                  <span className="activity-time">2 minutes ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-avatar">👥</div>
                <div className="activity-content">
                  <p>
                    <strong>John</strong> added a comment to "API Integration"
                  </p>
                  <span className="activity-time">15 minutes ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-avatar">📝</div>
                <div className="activity-content">
                  <p>
                    <strong>Sarah</strong> created new task "User Testing"
                  </p>
                  <span className="activity-time">1 hour ago</span>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-avatar">✅</div>
                <div className="activity-content">
                  <p>
                    <strong>Mike</strong> completed "Database optimization"
                  </p>
                  <span className="activity-time">3 hours ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2>Upcoming Deadlines</h2>
            </div>
            <div className="deadline-list">
              <div className="deadline-item urgent">
                <div className="deadline-date">
                  <span className="date">15</span>
                  <span className="month">Jul</span>
                </div>
                <div className="deadline-content">
                  <h4>Project Alpha Launch</h4>
                  <p>2 days remaining</p>
                </div>
              </div>
              <div className="deadline-item warning">
                <div className="deadline-date">
                  <span className="date">22</span>
                  <span className="month">Jul</span>
                </div>
                <div className="deadline-content">
                  <h4>Q3 Planning Meeting</h4>
                  <p>1 week remaining</p>
                </div>
              </div>
              <div className="deadline-item normal">
                <div className="deadline-date">
                  <span className="date">30</span>
                  <span className="month">Jul</span>
                </div>
                <div className="deadline-content">
                  <h4>Website Redesign</h4>
                  <p>3 weeks remaining</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardView;
