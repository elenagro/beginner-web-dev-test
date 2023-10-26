import React from "react";

import "./Container.scss";

const Container = (props) => {
  return (
    <div className="container">
      <div className="fixed-container">{props.children}</div>
    </div>
  );
};

export default Container;
