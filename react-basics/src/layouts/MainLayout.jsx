import "../assets/css/style.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardView from "../views/dashboard";
import AddTaskPage from "../views/AddTaskPage";

function MainLayout() {


  return (
    <>
      <div className="wrapper">
        {/* Sidebar */}
        <Sidebar />

        <div className="main">
        {/* Header */}
        <Header />

            {/* <DashboardView /> */}
            <AddTaskPage />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
