import React from "react";
import { useState } from "react";
import { CountryContext } from "react-svg-worldmap";
import WorldMap from "react-svg-worldmap";
import "./WorldMap.css";
const getStyle = ({
  countryValue,
  countryCode,
  minValue,
  maxValue,
  color,
}) => ({
  fill: countryValue ? "blue" : 'white',
  fillOpacity: countryValue
    ? 0.1 + (1.5 * (countryValue - minValue)) / (maxValue - minValue)
    : 1,
  stroke: "grey",
  strokeWidth: 1.2,
  strokeOpacity: 0.2,
  cursor: "pointer",
});

export default function WorldMapComponent({ data, regions, total }) {
  function formattedNumber(num, digits) {
    if (typeof num === "undefined") return "";
    const magnitude = [
      { value: 1e9, text: " billion " },
      { value: 1e6, text: " million " },
      { value: 1e3, text: " thousand " },
      { value: 1, text: "" },
    ].find((magnitude) => num >= magnitude.value);
    if (magnitude) {
      return (
        (num / magnitude.value)
          .toFixed(digits)
          .replace(/\.0+$|(?<number>\.[0-9]*[1-9])0+$/, "$1") + magnitude.text
      );
    }
    return "";
  }
  const [regions1, setRegions] = useState(
    regions.map((region) => {
      return {
        region,
        percentage: (
          (data.reduce((acc, cur) => {
            if (cur.region == region) {
              return acc + cur.value;
            } else return acc;
          }, 0) /
            total) *
          100
        ).toFixed(2),
        listCountry: data.filter((item) => item.region == region),
      };
    })
  );
  // E.g. format the number 1000000 to "1 thousand"

  return (
    <div>
      <WorldMap
        styleFunction={getStyle}
        size="xl"
        backgroundColor="#636c761f"
        color="white"
        title="Top 5 trading area"
        data={data.map((item) => {
          return {
            country: item.country,
            value: item.value,
          };
        })}
      />
      <div className="flex">
        {regions1.map((region) => (
          <div className="item" key={region.value}>
            <span>{region.region}</span>
            <h1>{region.percentage}%</h1>
            <div className="w-full">
              {region.listCountry.map((item) => (
                <>
                  <div className="flex flex_between w-full">
                    <span>{item.country}</span>
                    <span>{item.value}</span>
                  </div>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
