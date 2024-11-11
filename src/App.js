import React from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import Banner from "./Components/banner";
import Rowpost from "./Components/rowpost";
import { action, comedy, documentries, horror, orginals, romance } from "./urls";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Rowpost url={orginals} title="Netflix Orginals" />
      <Rowpost url={action} title="Action" isSmall />
      <Rowpost url={horror} title="Horror" isSmall />
      <Rowpost url={comedy} title="Comedy" isSmall />
      <Rowpost url={romance} title="Romance" isSmall />
      <Rowpost url={documentries} title='Documentries' isSmall />
    </div>
  );
}
//api: 5854a45fbc95c349d0e06b853b574a84
