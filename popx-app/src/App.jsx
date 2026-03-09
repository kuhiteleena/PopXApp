import { useState } from "react";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AccountSettings from "./pages/AccountSettings";

const pageList = ["welcome", "login", "register", "account"];

const screens = {
  welcome:  Welcome,
  login:    Login,
  register: Register,
  account:  AccountSettings,
};

function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const page = pageList[pageIndex];
  const Screen = screens[page];

  const goNext = () => setPageIndex((i) => Math.min(i + 1, pageList.length - 1));
  const goPrev = () => setPageIndex((i) => Math.max(i - 1, 0));
  const goHome = () => setPageIndex(0);

  return (
    <div>
      <Screen navigate={(p) => setPageIndex(pageList.indexOf(p))} />

      {/* Bottom Nav */}
      {/* <div className="bottom-nav">
        <button className="nav-btn" onClick={goHome}>🏠</button>
        <button className="nav-btn" onClick={goPrev} disabled={pageIndex === 0}>‹</button>
        <span className="nav-count">{pageIndex + 1} of {pageList.length}</span>
        <button className="nav-btn" onClick={goNext} disabled={pageIndex === pageList.length - 1}>›</button>
      </div> */}
    </div>
  );
}

export default App;