import React from "react";
import "./App.css";
const covers = ({ boolean, cover }) => {
  return (
    <div className="Popup-covers">

      {boolean.map((bool, i) => {
        if (bool) {
          return (
            <div className="Popup-coverOn" key={i}>
              <img src={require(`./Images/${cover[i]}.jpg`)} alt="film cover" />
            </div>
          );
        } else {
          return (
            <div className="Popup-coverOff" key={i}>
              <img src={require(`./Images/${cover[i]}.jpg`)} alt="film cover" />
            </div>
          );
        }
      })}
    </div>
  )
};

export default covers;
