import { useState, useEffect } from "react";
import { checkIsLoggedIn } from "../hooks/Auth";
import { useNavigate } from "react-router-dom";
import DashboardMenu from "../components/DashboardMenu";
import DashboardContext from "../components/DashboardContext";
import Settings from "../components/Settings";
import Users from "../components/Users";
import Posts from "../components/Posts";

const Dashboard = (props) => {
  const navigateTo = useNavigate();

  const [selectedKey, setSelectedKey] = useState("posts");

  const url = window.location.href;

  useEffect(() => {
    if (!checkIsLoggedIn()) {
      navigateTo("/");
    }
    if (url.includes("/posts")) {
      setSelectedKey("posts");
    } else if (url.includes("/settings")) {
      setSelectedKey("settings");
    } else if (url.includes("/users")) {
      setSelectedKey("users");
    } else {
      setSelectedKey("posts");
    }
  }, [url]);

  return (
    <div className="pt-4 p-8 flex w-full h-full gap-8 ">
      <DashboardMenu selectedKey={selectedKey} />
      <DashboardContext pageName={selectedKey}>
        {(() => {
          if (selectedKey === "posts") {
            return <Posts token={props.token} userId={props.userId} />;
          } else if (selectedKey === "settings") {
            return <Settings token={props.token} userId={props.userId} />;
          } else if (selectedKey === "users") {
            return <Users token={props.token} userId={props.userId} />;
          }
        })()}
      </DashboardContext>
    </div>
  );
};

export default Dashboard;
