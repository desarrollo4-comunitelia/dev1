import React, { useState, useEffect } from "react";
import getImages from "../services/getImages";
import Images from "./Images";

export default function ListOfImages({ params }) {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);

  const [images, setImages] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function llamargetImages() {
      //Service getImages
      await getImages({ keyword }).then((array_img) => setImages(array_img));
      setLoading(false);
    }
    llamargetImages();
  }, [keyword]);

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
