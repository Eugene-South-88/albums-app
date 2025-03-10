import axios from "axios";

export const getAlbums = (albumIds, page, limit) => {
  return axios.get("https://jsonplaceholder.typicode.com/photos", {
    params: {
      albumId: albumIds ? albumIds.split(" ") : undefined,
      _page: page,
      _limit: limit,
    },
  });
};
