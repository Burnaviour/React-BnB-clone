import React from "react";

export default function Card(props) {
  //   console.log(props);
  let badgeTetx;
  if (props.openSpots === 0) {
    badgeTetx = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeTetx = "ONLINE";
  }
  return (
    <div className="card">
      {badgeTetx && <div className="card--badge">{badgeTetx}</div>}
      <img
        src={`/images/${props.img}`}
        className="card--image"
        alt="imageTag"
      />
      <div className="card--stats">
        <img src="/images/star.png" alt="star" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray"> {props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
