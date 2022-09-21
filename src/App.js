import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Card from "./components/card";
import Data from "./data";

export default function App() {
  const Cards = Data.map((card) => {
    return <Card key={card.id} item={card} />;
  });

  return (
    <>
      <Header />
      <Main />
      {<section className="cards-list">{Cards}</section>}
    </>
  );
}
