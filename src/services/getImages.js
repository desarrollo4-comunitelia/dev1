import axios from "axios";
const apiKey = "17960668-e1423d939f7c80ce8500a8a9a";

export default async function getImages({ keyword = "dogs" }) {
  const apiURL = `https://pixabay.com/api/?key=${apiKey}&q=${keyword}&image_type=photo&pretty=true`;
  try {
    const response = await axios.get(apiURL);
    return response.data.hits;
  } catch (error) {}
}
