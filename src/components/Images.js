import React from "react";
import "./Images.css";

export default function Images({ id, webformatURL, user, type, likes }) {
  return (
    <a href={`#${id}`} className="Images">
      <img src={webformatURL} alt={type} />
      <h3>Usuario:{user}</h3>
      <small>Likes:{likes}</small>
    </a>
  );
}
