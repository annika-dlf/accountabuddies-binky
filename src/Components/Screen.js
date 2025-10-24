import React from "react";
import { useLocation } from "react-router-dom";

function Screen({ children }) {
  const location = useLocation();
  const path = location.pathname;

  // Determine background image class
  let screenClass = "screen_default-blue"; // default for App + Timer

  if (path.includes("success")) screenClass = "screen_success-blue";
  else if (path.includes("failed")) screenClass = "screen_failed";

  return <div className={`Screen ${screenClass}`}>{children}</div>;
}

export default Screen;
