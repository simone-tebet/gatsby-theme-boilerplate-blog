import React from "react";

const BodyBlock = ({ children, opt }) => {
  return <div className={opt.classes}>{children}</div>;
};

export default BodyBlock;
