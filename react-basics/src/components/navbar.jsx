import { Link, Router } from "react-router-dom";

let Navbar = () => {
  return (
    <>
      <Router>
        <Link to="/">Go to Home</Link>
        <Link to="/about">Go to About</Link>
        <Link to="/contact">Go to Contact</Link>
      </Router>
    </>
  );
};

export default Navbar;
