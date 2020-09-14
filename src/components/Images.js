import React from "react";
import "./Images.css";
import { DetalleImagenes } from "../pages/Detail";
import { Link } from "wouter";

export default function Images({ id, webformatURL, user, type, likes }) {
  return (
    <div>
      <Link to={`/imagedetail/${id}`} className="Images">
        <img src={webformatURL} alt={type} />
        <h3>Usuario:{user}</h3>
        <small>Likes:{likes}</small>
      </Link>
    </div>
  );
}
