import { React, useState, useEffect } from "react";
import { Listbox, ListboxItem, select } from "@nextui-org/react";
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
    // <div className="border-primary border-2	border-solid border-black border rounded-md">
    //   <Listbox className="p-8 ">
    //     {" "}
    //     <ListboxItem className="py-2 " key="new">
    //       New file
    //     </ListboxItem>
    //     <ListboxItem className="py-2" key="copy">
    //       Copy link
    //     </ListboxItem>
    //     <ListboxItem className="py-2" key="edit">
    //       Edit file
    //     </ListboxItem>
    //   </Listbox>
    // </div>
    <div className="pt-4 p-8 flex w-full h-full gap-8 ">
      <DashboardMenu selectedKey={selectedKey} />
      <DashboardContext pageName={selectedKey}>
        {(() => {
          if (selectedKey === "posts") {
            return <Posts />;
          } else if (selectedKey === "settings") {
            return <Settings />;
          } else if (selectedKey === "users") {
            return <Users />;
          }
        })()}
      </DashboardContext>
    </div>
  );
};

export default Dashboard;
