import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Card from "./components/card";
import Jokes from "./data";

export default function App() {
  const Joke = Jokes.map((jokes) => {
    return <Card key={jokes.id} item={jokes} />;
  });

  return (
    <>
      <Header />
      {/* <Main /> */}
      {<section className="cards-list">{Joke}</section>}
    </>
  );
}
