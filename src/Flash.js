import { useState } from "react";
import "./Flash.css";

const Flash = ({ message }) => {
  if (message !== null && message !== "" && message !== undefined) {
    return (
      <div id="error-flash" className="error hide-opacity">
        {message}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Flash;
