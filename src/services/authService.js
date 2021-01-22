import axios from "axios";
//TODO can be added in constants
const API_URL = "https://swapi.dev/api/people/?search=";
const login = (username, password) => {
  return axios.get(API_URL + username).then((response) => {
    let error = { message: "Invalid username or password" };
    if (response.data && response.data.results.length > 1) {
      throw error;
    }

    //Hard code the search count for now
    let user = {
      ...response.data.results[0],
      searchCount: 15,
      serachDuration: 60000
    };

    if (user.name !== username || user.birth_year !== password) {
      throw error;
    }
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  login,
  logout
};
