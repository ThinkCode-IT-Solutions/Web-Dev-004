import "../assets/css/style.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardView from "../views/dashboard";
import AddTaskPage from "../views/AddTaskPage";

function MainLayout() {
  let totalTask = 67;
  let taskList = [
    "buy macbook",
    "create proposal for altora",
    "write project description",
  ];
  let dashboardData = {
    total: 100,
    completed: 35,
    inProgress: 60,
    overdue: 5,
    tasks: [
      "buy macbook",
      "create proposal for altora",
      "write project description",
      "create graphics for sf.com"
    ],
  };
  let isLoggedIn = true;
  return (
    <>
      <div className="wrapper">
        {/* Sidebar */}
        <Sidebar />

        <div className="main">
          {/* Header */}
          <Header />

          <DashboardView
            totalTask={totalTask}
            name="Shahzad"
            task={taskList}
            login={isLoggedIn}
            stats={dashboardData}
          />
          {/* <AddTaskPage /> */}
        </div>
      </div>
    </>
  );
}

export default MainLayout;
