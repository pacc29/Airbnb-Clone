import React from "react";

export default function Card(props) {
  let badgeText
  if (props.openSpots === 0){
    badgeText = "SOLD OUT"
  }
  else if (props.location === "Online"){
    badgeText = "ONLINE"
  }

  return (
    <div className="wrapper">
      {badgeText && <span className="product-status">{badgeText}</span>}
      <img
        className="wrapper-img"
        src={`../cards_img/${props.img}`}
        alt="IMG"
      />
      <ul className="description-list">
        <li>
          <img className="star" src="/cards_img/star.png" alt="star" />
          <span>{props.rating} </span>
          <span>
            ({props.reviews}) <strong>&#183;</strong> {props.location}
          </span>
        </li>
        <li>{props.title}</li>
        <li>
          <span>
            <strong>From ${props.price}</strong> / person
          </span>
        </li>
      </ul>
    </div>
  );
}
