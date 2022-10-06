import React, { memo } from "react";

const Content = memo(() => {
  return (
    <div
      style={{
        padding: 24,
        minHeight: "100vh",
      }}
    >
      cabra
    </div>
  );
});
Content.displayName = "Content";
export default Content;
