import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { search, resetSearch } from "../actions/search";
import Planets from "./Planets";
const Home = () => {
  // const [content, setContent] = useState("");
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  const handleChange = (event) => {
    //TODO add validation
    let query = event.target.value;
    if (!query || query.trim().length < 1) {
      dispatch(resetSearch());
      return;
    }
    // dispatch(search());
    dispatch(search(query));
  };

  return (
    <div className="container-fluid">
      <h5 className="text-secondary">Search Planets</h5>
      <input
        className="search-input"
        type="text"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <Planets />
    </div>
  );
};

export default Home;
