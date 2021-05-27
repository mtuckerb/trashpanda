import { useState } from "react";
import "./Flash.css";

const Flash = ({ message }) => {
  const [extraClass, setExtraclass] = useState();
  if (message !== null && message !== "") {
    return (
      <div id="error-flash" className="error ">
        {message}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Flash;
