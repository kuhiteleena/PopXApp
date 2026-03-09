import { useState } from "react";
import PhoneFrame from "../components/PhoneFrame";

function Login({ navigate }) {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors]     = useState({});

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validate()) {
      navigate("account");
    }
  };

  return (
    <PhoneFrame>
      <div className="login-content">

        <h1>Signin to your<br />PopX account</h1>
        <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>

        {/* Email */}
        <div className="field-wrap">
          <div className={`input-box ${errors.email ? "input-error" : ""}`}>
            <label className="field-label">Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: "" }));
              }}
            />
          </div>
          {errors.email && <p className="error-msg">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="field-wrap">
          <div className={`input-box ${errors.password ? "input-error" : ""}`}>
            <label className="field-label">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({ ...prev, password: "" }));
              }}
            />
          </div>
          {errors.password && <p className="error-msg">{errors.password}</p>}
        </div>

        <button
          className="primary"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>
    </PhoneFrame>
  );
}

export default Login;