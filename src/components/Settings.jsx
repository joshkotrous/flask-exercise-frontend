import { React, useEffect, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import Cookies from "js-cookie";
import { GetUserInfo, UpdateUserInfo } from "../hooks/GetUserInfo";

const Settings = () => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    country: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const getInfo = async () => {
    const users = await GetUserInfo(
      Cookies.get("userId"),
      Cookies.get("token")
    );
    setUserInfo(users);
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <div>
      <div className="grid gap-4 grid-cols-3">
        <Input
          isClearable
          type="text"
          label="First Name"
          variant="bordered"
          placeholder="First Name"
          onClear={() => setUserInfo({ ...userInfo, first_name: "" })}
          className="max-w-xs"
          value={userInfo.first_name}
          onChange={(e) =>
            setUserInfo({ ...userInfo, first_name: e.target.value })
          }
        />
        <Input
          isClearable
          type="text"
          label="Last Name"
          variant="bordered"
          placeholder="Last Name"
          onClear={() => setUserInfo({ ...userInfo, last_name: "" })}
          className="max-w-xs"
          value={userInfo.last_name}
          onChange={(e) =>
            setUserInfo({ ...userInfo, last_name: e.target.value })
          }
        />
        <Input
          isClearable
          type="email"
          label="Email"
          variant="bordered"
          placeholder="Email"
          onClear={() => setUserInfo({ ...userInfo, email: "" })}
          className="max-w-xs"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <Input
          isClearable
          type="text"
          label="Username"
          variant="bordered"
          placeholder="Username"
          onClear={() => setUserInfo({ ...userInfo, username: "" })}
          className="max-w-xs"
          value={userInfo.username}
          onChange={(e) =>
            setUserInfo({ ...userInfo, username: e.target.value })
          }
        />
        <Input
          isClearable
          type="text"
          label="Country"
          variant="bordered"
          placeholder="Country"
          onClear={() => setUserInfo({ ...userInfo, country: "" })}
          className="max-w-xs"
          value={userInfo.country}
          onChange={(e) =>
            setUserInfo({ ...userInfo, country: e.target.value })
          }
        />
      </div>
      <Button
        className="mt-4"
        color="primary"
        onClick={() =>
          UpdateUserInfo(
            Cookies.get("userId"),
            Cookies.get("token"),
            userInfo.username,
            userInfo.email,
            userInfo.first_name,
            userInfo.last_name,
            setIsLoading
          )
        }
        isLoading={isLoading}
      >
        Save Changes
      </Button>
    </div>
  );
};

export default Settings;
