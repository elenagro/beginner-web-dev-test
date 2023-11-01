import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import Wrapper from "../shared/Wrapper/Wrapper";
import { useTheme } from "../store/theme-context";

import "./HomeLayout.scss";

const HomeLayout = () => {
  const { darkTheme } = useTheme();

  const themeClass = darkTheme ? "dark" : "light";

  return (
    <div>
      <Header />
      <Wrapper className={`theme ${themeClass}`}>
        <Outlet />
      </Wrapper>
      <Footer />
    </div>
  );
};

export default HomeLayout;
