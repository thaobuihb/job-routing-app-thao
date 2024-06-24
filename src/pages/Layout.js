import React from "react";
import { Outlet } from "react-router-dom";
import SearchAppBar from "../components/SearchAppBar";

function Layout() {
  return (
    <>
      <SearchAppBar />
      <Outlet />
    </>
  );
}

export default Layout;