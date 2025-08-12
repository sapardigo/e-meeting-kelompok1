import "../styles/login.css";
import bgImage from "../assets/meeting-room.png";

export default function Login() {
  return (
    <>
      <div
        className="background"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="login-box">
        <div className="logo-container">
          <div className="logo">E</div>
          <span className="logo-text">E-Meeting</span>
        </div>

        <h2 className="title">Welcome Back!</h2>
        <p className="subtitle">
          Please enter your username and password here!
        </p>

        <form id="loginForm">
          <div className="input-group">
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="input-field"
              required
            />
            <button
              type="button"
              id="togglePassword"
              className="password-toggle"
            >
              <i className="fas fa-eye-slash"></i>
            </button>
          </div>
          <div style="margin-bottom: 24px;">
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
