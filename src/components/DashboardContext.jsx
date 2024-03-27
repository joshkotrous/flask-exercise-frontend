import React from "react";

const DashboardContext = (props) => {
  return (
    <div className="w-full h-full m-4 p-4 border-white border-solid border-1 rounded-xl">
      <h2 className="font-bold">
        {props.pageName.charAt(0).toUpperCase() + props.pageName.slice(1)}
      </h2>
      <div className="pt-4">{props.children}</div>
    </div>
  );
};

export default DashboardContext;
