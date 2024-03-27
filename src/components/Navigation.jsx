import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
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
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="flat"
              onClick={() => SignOut()}
            >
              Sign Out
            </Button>
          </NavbarItem>
        ) : null}
      </NavbarContent>
    </Navbar>
  );
};
