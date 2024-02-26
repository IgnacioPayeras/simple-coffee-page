import React, { useState } from "react";
import "../stylesheets/button.css";

const Button = (props) => {
  
  return (
    <button className="all" >{props.name}</button>
  );
};

export default Button;
