import React from "react";
export const Content = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <div className="w-fit relative top-1/4 -translate-y-1/4 left-1/2 -translate-x-1/2">{children}</div>
    </div>
  );
};

