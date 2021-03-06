import React, { useContext } from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link } from "react-router-dom";

import { UserContext } from "../../Providers/userProvider";

import "./style.css";

const Navigation = props => {
  const user = useContext(UserContext);
  const { className, selection } = props;
  return (
    <div className={`cac_navigation ${className || ""}`}>
      <Link
        to="/home"
        className={`cac_section ${selection === "home" ? "active" : ""}`}
      >
        Home
      </Link>
      <Link
        to="/public"
        className={`cac_section ${selection === "public" ? "active" : ""}`}
      >
        Public
      </Link>{" "}
      <Link
        to="/editorial"
        className={`cac_section ${selection === "editorial" ? "active" : ""}`}
      >
        Editorial
      </Link>{" "}
      <Link
        to="/weekly-problems"
        className={`cac_section ${
          selection === "weekly-problem" ? "active" : ""
        }`}
      >
        Weekly Problem
      </Link>
      <Link
        to="/calendar"
        className={`cac_section ${selection === "calendar" ? "active" : ""}`}
      >
        Calendar
      </Link>
      <Link
        to="/attendance"
        className={`cac_section ${selection === "attendance" ? "active" : ""}`}
      >
        Attendance
      </Link>
      {user.isAdmin && (
        <Link
          to="/create"
          className={`cac_section cac_section--admin ${
            selection === "create" ? "active" : ""
          }`}
        >
          Create
        </Link>
      )}
    </div>
  );
};

export default Navigation;
