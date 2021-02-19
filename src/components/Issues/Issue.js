import React from "react";
import "./Issue.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const Issue = (props) => {
  return (
    <div className="Issue">
      <div className="header">
        <span className="isOpen">
          {props.isOpen ? (
            <FontAwesomeIcon icon={faCheckCircle} className="faCheckCircle" />
          ) : (
            <FontAwesomeIcon icon={faTimesCircle} className="faTimesCircle" />
          )}
        </span>
        <h4 className="title">{props.text}</h4>
        <span className="Badges">
          {props.badges.map((badge) => {
            return (
              <span
                key={props.id}
                className="Badge"
                style={{ backgroundColor: badge.color }}
              >
                {badge.text}
              </span>
            );
          })}
        </span>
        <p className="title">{props.number}</p>
      </div>
    </div>
  );
};

export default Issue;
