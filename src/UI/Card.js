import React from "react";

const Card = (props) => {
  const classNames = `mx-50 ${props.className}`;
  return <div className={classNames}>{props.children}</div>;
};

export default Card;
