import React from "react";
import Navbar from "@/components/common/Navbar";

const MainLayout = (props) => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="w-[1000px] mx-auto bg-white">
        <Navbar></Navbar>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
