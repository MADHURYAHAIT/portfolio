import React, { Fragment } from "react";
import "./confetti.scss";

let count = 200;
let points = [];

function Confetti({ open }) {
  let confetti = generatePoints();

  function generatePoints() {
    points = [];

    for (let i = 0; i < count; i++) {
      points.push(<p className={`${open ? "animated" : ""}`} key={i} />);
    }
    return points;
  }

  return (
    <Fragment>
      <div className="confetti-container">
        <div className={`confetti ${open ? "animated" : ""}`}>
          {confetti.map((c) => c)}
        </div>
      </div>
    </Fragment>
  );
}

export default Confetti;