import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="wrapper">
      {badgeText && <span className="product-status">{badgeText}</span>}
      <img
        className="wrapper-img"
        src={`../cards_img/${props.item.coverImg}`}
        alt="IMG"
      />
      <ul className="description-list">
        <li>
          <img className="star" src="/cards_img/star.png" alt="star" />
          <span>{props.item.stats.rating} </span>
          <span>
            ({props.item.stats.reviewCount}) <strong>&#183;</strong> {props.item.location}
          </span>
        </li>
        <li>{props.item.title}</li>
        <li>
          <span>
            <strong>From ${props.item.price}</strong> / person
          </span>
        </li>
      </ul>
    </div>
  );
}
