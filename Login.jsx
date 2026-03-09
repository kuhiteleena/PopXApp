import { useState } from "react";
import PhoneFrame from "../components/PhoneFrame";

const labelStyle = {
  fontSize: 11,
  color: "#6C3CE2",
  fontWeight: 600,
  marginBottom: 4,
  display: "block",
};

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #ddd",
  borderRadius: 6,
  fontSize: 14,
  color: "#333",
  outline: "none",
  boxSizing: "border-box",
};

const fieldWrap = { marginBottom: 18 };

function Login({ navigate }) {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");

  return (
    <PhoneFrame>
      <div style={{ padding: "36px 24px 32px" }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 14px", color: "#1a1a1a", lineHeight: 1.3 }}>
          Signin to your<br />PopX account
        </h1>
        <p style={{ fontSize: 14, color: "#888", lineHeight: 1.6, margin: "0 0 28px" }}>
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>

        <div style={fieldWrap}>
          <label style={labelStyle}>Email Address</label>
          <input
            style={inputStyle}
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={fieldWrap}>
          <label style={labelStyle}>Password</label>
          <input
            style={inputStyle}
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={() => navigate("account")}
          style={{
            width: "100%",
            padding: "14px",
            background: email && password ? "#6C3CE2" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontSize: 15,
            fontWeight: 600,
            cursor: email && password ? "pointer" : "default",
            marginTop: 8,
          }}
        >
          Login
        </button>

        <p style={{ marginTop: 20, fontSize: 13, color: "#888", textAlign: "center" }}>
          Don't have an account?{" "}
          <span
            onClick={() => navigate("register")}
            style={{ color: "#6C3CE2", cursor: "pointer", fontWeight: 600 }}
          >
            Register
          </span>
        </p>
      </div>
    </PhoneFrame>
  );
}

export default Login;
