import PhoneFrame from "../components/PhoneFrame";

function AccountSettings({ navigate }) {
  return (
    <PhoneFrame>

      {/* Header */}
      <div className="settings-header">
        <h2>Account Settings</h2>
      </div>

      {/* Profile */}
      <div className="profile">
        <div className="avatar-wrap">
          <div className="avatar">
            <svg width="62" height="62" viewBox="0 0 62 62">
              <rect width="62" height="62" fill="#c8a882" />
              <circle cx="31" cy="22" r="12" fill="#a07050" />
              <ellipse cx="31" cy="56" rx="20" ry="16" fill="#a07050" />
            </svg>
          </div>
          <div className="camera-badge">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
              <path d="M12 15.2A3.2 3.2 0 1 0 12 8.8a3.2 3.2 0 0 0 0 6.4z" />
              <path d="M9 3L7.17 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.17L15 3H9zm3 14.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" />
            </svg>
          </div>
        </div>

        <div className="profile-info">
          <p>Marry Doe</p>
          <p>Marry@Gmail.Com</p>
        </div>
      </div>

      {/* Bio */}
      <div className="settings-bio">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>

      {/* Back */}
      <button className="back-btn" onClick={() => navigate("welcome")}>
        ← Back to Welcome
      </button>

    </PhoneFrame>
  );
}

export default AccountSettings;
