import "./App.css";
import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Cards";
import data from "./data.js";

export default function App() {
  const DataArray = data.map((data) => <Card key={data.id} {...data} />);
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{DataArray}</section>
    </div>
  );
}
