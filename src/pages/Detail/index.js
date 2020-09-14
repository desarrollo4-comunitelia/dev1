import React, { useContext } from "react";
import ImageContext from "../../context/ImageContext";

export function DetalleImagenes({ params }) {
  const { images } = useContext(ImageContext);

  const image = images.find((singleImage) => singleImage.id === params.id);

  console.log(images);

  return <div>Hola</div>;
}
