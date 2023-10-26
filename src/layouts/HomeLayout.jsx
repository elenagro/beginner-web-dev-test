import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import Wrapper from "../shared/Wrapper/Wrapper";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </div>
  );
};

export default HomeLayout;
