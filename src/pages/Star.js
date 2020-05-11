import React from "react";
import {} from "react-bootstrap";
import "../css/star.scss";



const Star = (props) => {
  return (
    <>
      {/* <input type="radio" name="stars" id="star-null" />
      <input type="radio" name="stars" id="star-1" />
      <input type="radio" name="stars" id="star-2" />
      <input type="radio" name="stars" id="star-3" />
      <input type="radio" name="stars" id="star-4" checked />
      <input type="radio" name="stars" id="star-5" /> */}

      <section>
        <label for="star-1">
          <svg width="25" height="240" viewBox="0 0 51 48">
            <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
          </svg>
        </label>
        <label for="star-2">
          <svg width="25" height="240" viewBox="0 0 51 48">
            <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
          </svg>
        </label>
        <label for="star-3">
          <svg width="25" height="240" viewBox="0 0 51 48">
            <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
          </svg>
        </label>
        <label for="star-4">
          <svg width="25" height="240" viewBox="0 0 51 48">
            <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
          </svg>
        </label>
        <label for="star-5">
          <svg width="25" height="240" viewBox="0 0 51 48">
            <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
          </svg>
        </label>
        <label for="star-null">Clear</label>
      </section>
    </>
  );
};

export default Star;
