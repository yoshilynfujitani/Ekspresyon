import React from "react";
import { useLogout } from "./useLogout";

const Logout = () => {
  const { logout, isLoading } = useLogout();
  return (
    <button onClick={logout} disabled={isLoading}>
      Log Out
    </button>
  );
};

export default Logout;
