import { React, useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { GetAllUsers } from "../hooks/GetUserInfo";
import Cookies from "js-cookie";

const Users = () => {
  const [users, setUsers] = useState();

  const getUsers = async () => {
    const users = await GetAllUsers(Cookies.get("token"));
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  console.log(users);

  return (
    <Table className="text-black" aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Username</TableColumn>
        <TableColumn>First Name</TableColumn>
        <TableColumn>Last Name</TableColumn>
        <TableColumn>Email</TableColumn>
      </TableHeader>
      <TableBody>
        {users &&
          users.map(function (data) {
            return (
              <TableRow key={data.id}>
                <TableCell>{data.username}</TableCell>
                <TableCell>{data.first_name}</TableCell>
                <TableCell>{data.last_name}</TableCell>
                <TableCell>{data.email}</TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
};

export default Users;
