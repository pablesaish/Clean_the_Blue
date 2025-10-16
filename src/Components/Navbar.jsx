import React, { useContext } from "react"; // Import useContext
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { AuthContext } from './AuthContext'; // Import AuthContext

const Navbar = () => {
  const { user, logout } = useContext(AuthContext); // Get user and logout from AuthContext
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login after logout
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    // { name: "Get Involved", href: "/get-involved" },
    // { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Donate", href: "/donate" }
  ];

  return (
    <div className="navbar-container select-none">
      <nav className="navbar-nav flex justify-between items-center px-10 py-6 text-white relative">
        <Link to="/" className="logo-link">
          <span className="logo-primary">CLEAN</span>
          <span className="logo-secondary">the</span>
          <span className="logo-primary">BLUE</span>
        </Link>

        <ul className="nav-links-list">
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.href} className="nav-link">
                <span className="nav-link-text">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="auth-links-list">
          {user ? ( // Conditional rendering for logged-in user
            <>
              <li>
                <span className="text-white text-lg mr-4">Hi, {user.name}!</span> {/* Display user's name */}
              </li>
              <li>
                <button 
                  onClick={handleLogout} 
                  className="login-button"
                >
                  Logout
                </button>
              </li>
            </>
          ) : ( // Conditional rendering for logged-out user
            <li>
              <Link to="/login" className="login-button">
                Login / Signup
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;