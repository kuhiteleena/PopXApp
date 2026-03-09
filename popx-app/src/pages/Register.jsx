import { useState } from "react";
import PhoneFrame from "../components/PhoneFrame";

const fields = [
  { key: "fullName",  label: <>Full Name<span style={{color:"red"}}>*</span></>,     placeholder: "Marry Doe", type: "text"     },
  { key: "phone",     label: <>Phone number<span style={{color:"red"}}>*</span></>,  placeholder: "Marry Doe", type: "tel"      },
  { key: "email",     label: <>Email address<span style={{color:"red"}}>*</span></>, placeholder: "Marry Doe", type: "email"    },
  { key: "password",  label: <>Password <span style={{color:"red"}}>*</span></>,     placeholder: "Marry Doe", type: "password" },
  { key: "company",   label: <>Company name</>,                                       placeholder: "Marry Doe", type: "text"     },
];

function Register({ navigate }) {
  const [form, setForm] = useState({
    fullName: "", phone: "", email: "",
    password: "", company: "", isAgency: "yes",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (key, val) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (form.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (!/[A-Z]/.test(form.password)) {
      newErrors.password = "Password must contain at least one uppercase letter";
    } else if (!/[0-9]/.test(form.password)) {
      newErrors.password = "Password must contain at least one number";
    }

    if (form.company.trim() && form.company.trim().length < 2) {
      newErrors.company = "Company name must be at least 2 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      navigate("account");
    }
  };

  return (
    <PhoneFrame>
      <div className="register-content">

        {/* Title */}
        <div className="register-title">
          <h1>Create your<br />PopX account</h1>
        </div>

        {/* Input Fields */}
        {fields.map((f) => (
          <div key={f.key} className="field-wrap">
            <div className={`input-box ${errors[f.key] ? "input-error" : ""}`}>
              <label className="field-label">{f.label}</label>
              <input
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.key]}
                maxLength={f.key === "phone" ? 10 : undefined}
                onChange={(e) => {
                  const val = f.key === "phone"
                    ? e.target.value.replace(/\D/g, "")  // ← only digits
                    : e.target.value;
                  handleChange(f.key, val);
                }}
              />
            </div>
            {errors[f.key] && <p className="error-msg">{errors[f.key]}</p>}
          </div>
        ))}

        {/* Agency Radio */}
        <p className="agency-label">Are you an Agency?<span style={{color:"red"}}>*</span></p>
        <div className="radio-group">
          {["yes", "no"].map((opt) => (
            <label key={opt} className="radio-option">
              <div
                className={`radio-circle ${form.isAgency === opt ? "active" : ""}`}
                onClick={() => handleChange("isAgency", opt)}
              >
                {form.isAgency === opt && <div className="radio-dot" />}
              </div>
              {opt.charAt(0).toUpperCase() + opt.slice(1)}
            </label>
          ))}
        </div>

      </div>

      {/* Fixed Bottom Button */}
      <div className="register-footer">
        <button className="primary" onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </PhoneFrame>
  );
}

export default Register;