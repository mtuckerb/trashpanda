import { useState, useEffect } from "react";
import "./Flash.css";
import Bus from "./utils/bus.js";

const Flash = () => {
  let [visibility, setVisibility] = useState(false);
  let [message, setMessage] = useState("");
  let [type, setType] = useState("");

  useEffect(() => {
    Bus.addListener("flash", ({ message, type }) => {
      setVisibility(true);
      setMessage(message);
      setType(type);
      setTimeout(() => {
        setVisibility(false);
      }, 4000);
    });
  }, []);

  const body = () => {
    if (visibility) {
      return (
        <div id="flash" className={type}>
          {message}
        </div>
      );
    } else {
      return <div id="flash"> &nbsp; </div>;
    }
  };
  return body();
};

export default Flash;
