import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";

const DashboardMenu = (props) => {
  return (
    <div className="w-fit pt-4">
      <Listbox
        disallowEmptySelection
        selectionMode="single"
        aria-label="User Menu"
        className="self-start		p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium "
        itemClasses={{
          base: "	px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
        }}
        selectedKeys={["posts"]}
      >
        <ListboxItem
          href="/posts"
          selectedIcon=" "
          className={
            props.selectedKey === "posts"
              ? " bg-[hsl(var(--nextui-default))] "
              : "hover:bg-default-100/80"
          }
          key="posts"
          showDivider={false}
          style={{ color: "black" }}
        >
          Posts
        </ListboxItem>
        <ListboxItem
          href="/users"
          className={
            props.selectedKey === "Users"
              ? "bg-[hsl(var(--nextui-default))]"
              : "hover:bg-default-100/80"
          }
          selectedIcon=" "
          key="users"
          style={{ color: "black" }}
        >
          Users
        </ListboxItem>
        <ListboxItem
          href="/settings"
          className={
            props.selectedKey === "settings"
              ? "bg-[hsl(var(--nextui-default))]"
              : "hover:bg-default-100/80"
          }
          selectedIcon=" "
          key="settings"
          style={{ color: "black" }}
        >
          Settings
        </ListboxItem>
      </Listbox>
    </div>
  );
};

export default DashboardMenu;
