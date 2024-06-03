import * as React from "react";
import { useState } from "react";
import { CountryContext } from "react-svg-worldmap";
import WorldMapComponent from "../src/components/worldMap/WorldMap";
import "./App.css";
import EnhancedTable from "./components/Table/Table";

export default function App() {
  const regions = [
    "Asia",
    "Europe",
    "South America",
    "North America",
    "Africa",
  ];
  const data = [
    { country: "cn", value: 280430, region: "Asia" }, // china
    { country: "in", value: 62154, region: "Asia" }, // india
    { country: "bd", value: 17549, region: "Asia" }, // bangladesh
    { country: "pk", value: 10614, region: "Asia" }, // pakistan
    { country: "kh", value: 8051, region: "Asia" },

    {
      country: "bv",
      value: 7632,
      region: "Europe",
    },
    {
      country: "ro",
      value: 2290,
      region: "Europe",
    },
    {
      country: "it",
      value: 1692,
      region: "Europe",
    },
    {
      country: "hr",
      value: 696,
      region: "Europe",
    },
    {
      country: "hu",
      value: 513,
      region: "Europe",
    },

    { country: "cl", value: 7545, region: "South America" },
    {
      country: "pe",
      value: 1689,
      region: "South America",
    },
    {
      country: "co",
      value: 1401,
      region: "South America",
    },
    {
      country: "ec",
      value: 513,
      region: "South America",
    },
    { country: "br", value: 433, region: "South America" }, // brazil

    {
      country: "gt",
      value: 2155,
      region: "North America",
    },
    {
      country: "hn",
      value: 1910,
      region: "North America",
    },
    {
      country: "do",
      value: 1866,
      region: "North America",
    },
    {
      country: "ni",
      value: 1089,
      region: "North America",
    },
    {
      country: "ht",
      value: 756,
      region: "North America",
    },

    { country: "ng", value: 1863, region: "Africa" }, // nigeria
    { country: "ls", value: 812, region: "Africa" },
    { country: "za", value: 766, region: "Africa" },
    { country: "ma", value: 146, region: "Africa" },
    { country: "na", value: 88, region: "Africa" },
  ];
  const total = data.reduce((acc, current) => acc + current.value, 0);

  return (
    <>
      <div className="App">
        <div className="container">
          <WorldMapComponent
            data={data} regions={regions} total={total}
          ></WorldMapComponent>
          <EnhancedTable data={data}></EnhancedTable>
        </div>
      </div>
    </>
  );
}
