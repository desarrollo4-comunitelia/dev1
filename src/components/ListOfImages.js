import React from "react";
import Images from "./Images";
import { useImageList } from "../hooks/useImageList";

export default function ListOfImages({ params }) {
  const { keyword } = params;

  const { loading, images } = useImageList({ keyword });

  if (loading) return <i>Cargando...</i>;
  return (
    <div>
      {images.map(({ id, webformatURL, user, type, likes }) => (
        <Images
          key={id}
          id={id}
          webformatURL={webformatURL}
          user={user}
          type={type}
          likes={likes}
        />
      ))}
    </div>
  );
}
