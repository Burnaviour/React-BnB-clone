import "./App.css";
import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Cards";
import data from "./data.js";

export default function App() {
  const DataArray = data.map((data) => (
    <Card
      key={data.id}
      data={data}
      // img={data.coverImg}
      // rating={data.stats.rating}
      // reviewCount={data.stats.reviewCount}
      // location={data.location}
      // title={data.title}
      // price={data.price}
      // openSpots={data.openSpots}
    />
  ));
  return (
    <div>
      <Navbar />
      <section className="cards-list">{DataArray}</section>
    </div>
  );
}
