import PhoneFrame from "../components/PhoneFrame";

function Welcome({ navigate }) {
  return (
    <PhoneFrame>

      {/* Empty top space */}
      <div className="welcome-top" />

      {/* Content at bottom */}
      <div className="welcome-content">
        <h1>Welcome to PopX</h1>
        <p>
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        <button className="primary" onClick={() => navigate("register")}>
          Create Account
        </button>

        <button className="secondary" onClick={() => navigate("login")}>
          Already Registered? Login
        </button>
      </div>

    </PhoneFrame>
  );
}

export default Welcome;