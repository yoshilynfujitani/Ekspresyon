import React from "react";
import Feed from "./Feed/Feed";
import { useUser } from "./Auth/useUser";
import Spinner from "../../UI/Spinner";
import Logout from "./Auth/Logout";

const Home = () => {
  const { user, isLoading } = useUser();
  if (isLoading) return <Spinner />;
  console.log(user);
  return (
    <div className="container">
      <div className="flex">
        <h1>{user?.email}</h1>
        <div className="">
          <Logout />
        </div>
      </div>
      <Feed />
    </div>
  );
};

export default Home;
