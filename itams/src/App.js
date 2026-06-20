import "./index.css";
import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  const [view, setView] = useState("home"); // "home" | "login" | "register" | "forgot-password"
  const [activeTab, setActiveTab] = useState("home");

  const scrollToSection = (id) => {
    setActiveTab(id);
    if (view !== "home") {
      setView("home");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo" style={{ cursor: "pointer" }} onClick={() => scrollToSection("home")}>
          <h1>ITAMS</h1>
          <p>IT Asset Management System</p>
        </div>

        <ul className="nav-links">
          <li
            className={activeTab === "home" ? "active" : ""}
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className={activeTab === "features" ? "active" : ""}
            onClick={() => scrollToSection("features")}
          >
            Features
          </li>
          <li
            className={activeTab === "about" ? "active" : ""}
            onClick={() => scrollToSection("about")}
          >
            About Us
          </li>
          <li
            className={activeTab === "contact" ? "active" : ""}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </li>
        </ul>

        {view === "home" && (
          <div className="nav-buttons">
            <button className="outline-btn" onClick={() => setView("login")}>
              Login
            </button>
            <button className="blue-btn" onClick={() => setView("register")}>
              Register
            </button>
          </div>
        )}
      </nav>

      {/* View routing */}
      {view === "login" && (
        <Login
          onBack={() => setView("home")}
          onRegisterClick={() => setView("register")}
          onForgotPasswordClick={() => setView("forgot-password")}
        />
      )}
      {view === "register" && (
        <Register onBack={() => setView("home")} onLoginClick={() => setView("login")} />
      )}
      {view === "forgot-password" && (
        <ForgotPassword onLoginClick={() => setView("login")} />
      )}
      {view === "home" && (
        <Home
          onLoginClick={() => setView("login")}
          onRegisterClick={() => setView("register")}
        />
      )}
    </div>
  );
}

export default App;
