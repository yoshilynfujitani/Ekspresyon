import React from "react";
import { Outlet } from "react-router-dom";

const AppLayOut = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppLayOut;
