import React from "react";

const Mytravel = props => (
  <figure>
    <img src={props.image} alt={props.character} />
    <figcaption>
      <blockquote>{props.destination}</blockquote>
      <cite>{props.country}</cite>
      <cite>{props.distance}</cite>
    </figcaption>
  </figure>
);

export default Mytravel;