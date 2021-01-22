import { SEARCH_SUCCESS, SET_MESSAGE, SEARCH_FAIL } from "./types";

import SearchService from "../services/searchService";
export const search = (query) => (dispatch) => {
  return SearchService.search(query).then(
    (data) => {
      dispatch({
        type: SEARCH_SUCCESS,
        payload: { searchResult: data }
      });

      return Promise.resolve();
    },
    (error) => {
      const message = error.message || error.toString();

      dispatch({
        type: SEARCH_FAIL
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject();
    }
  );
};

export const resetSearch = () => ({
  type: SEARCH_SUCCESS,
  payload: { searchResult: [] }
});
