import axios from "axios";
//TODO can be added in constants
const API_URL = "https://swapi.dev/api/planets/?search=";
const search = (query) => {
  return axios.get(API_URL + query).then((response) => {
    return response.data.results;
  });
};

export default {
  search
};
