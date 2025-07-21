import "../assets/css/style.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardView from "../views/dashboard";
import AddTaskPage from "../views/AddTaskPage";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";

function MainLayout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default MainLayout;
