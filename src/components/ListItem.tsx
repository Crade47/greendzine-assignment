import React from "react";
import "./ListItem.css";
import { EmployeeData } from "../types";

export default function ListItem({
  id,
  avatar,
  email,
  first_name,
  last_name,
}: EmployeeData) {
  return (
    <div>
      <div className="item_container">
        <div className="avatar_container">
          <img src={avatar} alt={`${first_name}'s avatar`} className="avatar" />
        </div>
        <div className="id">
          <div className="inner_id_container">
            <span className="id_number">{id}</span>
          </div>
        </div>
      </div>

      <h2 className="first_name">{first_name}</h2>
    </div>
  );
}
