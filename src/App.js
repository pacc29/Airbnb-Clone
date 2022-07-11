import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Card from "./components/card";
import data from "./data";

export default function App() {
  const Cards = data.map((card) => {
    return (
      <Card
        key = {card.id}
        img={card.coverImg}
        rating={card.stats.rating}
        reviews={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
        openSpots={card.openSpots}
      />
    );
  });
  return (
    <>
      <Header />
      {/* <Main /> */}
      <section className="cards-list">{Cards}</section>
    </>
  );
}
