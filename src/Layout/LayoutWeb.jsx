import React from "react";
import { Outlet } from "react-router-dom";
import HeadersPage from "../components/headersPage";
import SeachPage from "../components/SeachPage";

const LayoutWeb = () => {
  return (
    <>
      <>
        <HeadersPage />
        <SeachPage />
      </>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutWeb;
