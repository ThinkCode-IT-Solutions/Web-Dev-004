import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ThankYouPage from "./pages/thank-you";
import NotFound from "./pages/404";

function App() {
  let navigate = useNavigate();
  let onSubmit = () => {
    console.log("form has been submitted");
    navigate("/thanks");
  };

  return (
    <>
      <h1>React Routing app</h1>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/about">About </Link>
        <button onClick={onSubmit}>Submit Form</button>
      </div>

      <hr />

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/thanks" element={<ThankYouPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
