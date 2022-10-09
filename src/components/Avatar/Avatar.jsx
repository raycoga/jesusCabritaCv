import React, { memo } from "react";
import "./Avatar.scss";
const Avatar = memo(({ collapsed }) => {
  return <div className={`Avatar ${collapsed ? "collapse" : ""}`}></div>;
});
Avatar.displayName = "Avatar";
export default Avatar;
