const PhoneFrame = ({ children }) => (
  <div style={{
    minHeight: "100vh",
    background: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Segoe UI', sans-serif",
  }}>
    <div style={{
      width: 360,
      minHeight: 560,
      background: "#fff",
      borderRadius: 12,
      boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column",
    }}>
      {children}
    </div>
  </div>
);

export default PhoneFrame;
