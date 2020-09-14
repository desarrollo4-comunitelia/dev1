import { useContext, useEffect, useState } from "react";
import getImages from "../services/getImages";
import ImageContext from "../context/ImageContext";

export function useImageList({ keyword }) {
  const [loading, setLoading] = useState(false);
  const { images, setImages } = useContext(ImageContext);
  //const [images, setImages] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function llamargetImages() {
      //Service getImages
      await getImages({ keyword }).then((array_img) => setImages(array_img));
      setLoading(false);
    }
    llamargetImages();
  }, [keyword, setImages]);

  return { loading, images };
}
