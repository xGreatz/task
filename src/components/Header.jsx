import React from "react";
import Weather from "./Weather";
import WorldTime from "./WorldTime";

const Header = () => {
  return (
    <div>
      <Weather />
      <WorldTime />
    </div>
  );
};

export default Header;
