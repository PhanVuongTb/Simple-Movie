import { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </Fragment>
  );
};

export default Main;
