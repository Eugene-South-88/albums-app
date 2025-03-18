import axios from "axios";

export const getAlbums = () => {
  return axios.get("https://jsonplaceholder.typicode.com/photos",{
    params:{
      _limit: 20
    }
  });
};
