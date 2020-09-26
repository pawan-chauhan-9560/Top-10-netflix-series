import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

ReactDOM.render(
  <>
    <h1 className="heading">Netflix Top 10 Series</h1>
    {Sdata.map((val) => {
      return (
        <Card
          sname={val.sname}
          imgSrc={val.imgSrc}
          title={val.title}
          link={val.link}
          rating={val.rating}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
