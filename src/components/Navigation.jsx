import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { useNavigate } from "react-router-dom";

import { SignOut } from "../hooks/Auth";

export const Navigation = (props) => {
  const navigateTo = useNavigate();

  return (
    <Navbar className="w-full	">
      <NavbarBrand>
        <Link href="/">
          <p className="font-bold text-inherit">ACME</p>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        {props.isLoggedIn ? (
          <NavbarItem>
            {/* <Button
              as={Link}
              color="primary"
              href="#"
              variant="flat"
              onClick={() => SignOut()}
            >
              Sign Out
            </Button> */}
            <Dropdown className="bg-black">
              <DropdownTrigger>
                <Avatar isBordered name={localStorage.getItem("username")} />
              </DropdownTrigger>
              <DropdownMenu
                onAction={(key) => {
                  if (key === "sign-out") {
                    SignOut();
                  }
                }}
                aria-label="Action event example"
              >
                <DropdownItem key="sign-out">Sign Out</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        ) : null}
      </NavbarContent>
    </Navbar>
  );
};
