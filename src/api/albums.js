import axios from "axios";

export const getAlbums = () => {
  return axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1&albumId=2&albumId=3')
}