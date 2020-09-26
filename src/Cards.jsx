import React from "react";

function Cards(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgSrc} alt="myPic" className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <h3>
              <span>&#127776;</span>
              {props.rating} imdb
            </h3>
            <a href={props.link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
